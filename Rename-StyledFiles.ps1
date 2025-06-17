# PowerShell script to rename styled.js files

Write-Host "Starting to rename styled.js files..." -ForegroundColor Green

# Find all styled.js files recursively (without -Name to get FileInfo objects)
$styledFiles = Get-ChildItem -Path "." -Filter "styled.js" -Recurse -File

if ($styledFiles.Count -eq 0) {
    Write-Host "No styled.js files found!" -ForegroundColor Yellow
    exit
}

foreach ($file in $styledFiles) {
    $fullPath = $file.FullName
    $directory = $file.DirectoryName
    $parentFolder = Split-Path $directory -Leaf
    $newFileName = "$parentFolder.styled.js"
    $newFullPath = Join-Path $directory $newFileName
    
    Write-Host "Renaming: $fullPath -> $newFullPath" -ForegroundColor Yellow
    Rename-Item -Path $fullPath -NewName $newFileName
}

Write-Host "All styled.js files have been renamed!" -ForegroundColor Green