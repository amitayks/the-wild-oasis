# PowerShell script to update styled imports

Write-Host "Starting to update styled imports..." -ForegroundColor Green

function Update-ImportsInFile {
    param($FilePath)
    
    try {
        $content = Get-Content -Path $FilePath -Raw
        $originalContent = $content
        $fileDir = Split-Path $FilePath -Parent
        
        # Pattern to match styled imports
        $pattern = 'from\s+[''"](\.*\/)*styled[''"]'
        
        $content = [regex]::Replace($content, $pattern, {
            param($match)
            
            $relativePath = $match.Groups[1].Value
            
            # Determine target directory
            if (-not $relativePath -or $relativePath -eq './') {
                $targetDir = $fileDir
            } else {
                $levelsUp = ($relativePath -split '\.\./').Count - 1
                $targetDir = $fileDir
                for ($i = 0; $i -lt $levelsUp; $i++) {
                    $targetDir = Split-Path $targetDir -Parent
                }
            }
            
            $folderName = Split-Path $targetDir -Leaf
            $newImport = $match.Value -replace 'styled[''"]', "$folderName.styled`""
            
            Write-Host "  $($match.Value) -> $newImport" -ForegroundColor Yellow
            return $newImport
        })
        
        if ($content -ne $originalContent) {
            Set-Content -Path $FilePath -Value $content -NoNewline
            return $true
        }
        return $false
    }
    catch {
        Write-Host "Error processing ${FilePath}: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Find all JS/JSX/TS/TSX files
$files = Get-ChildItem -Path ".\src" -Include "*.js", "*.jsx", "*.ts", "*.tsx" -Recurse -File | 
         Where-Object { $_.Name -notlike "*.styled.*" }

$updatedCount = 0

foreach ($file in $files) {
    Write-Host "Checking: $($file.FullName)" -ForegroundColor Cyan
    if (Update-ImportsInFile -FilePath $file.FullName) {
        $updatedCount++
    }
}

Write-Host "`n✅ Updated imports in $updatedCount files!" -ForegroundColor Green