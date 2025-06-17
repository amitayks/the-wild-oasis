import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Step 1: Update index.jsx files to use named exports
function updateIndexExports() {
  console.log("🔄 Updating index.jsx files to named exports...");

  const uiDir = "./src/ui";
  let updatedCount = 0;

  function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        processDirectory(itemPath);
      } else if (item === "index.jsx") {
        const content = fs.readFileSync(itemPath, "utf8");

        // Pattern: export { default } from "./ComponentName";
        const pattern =
          /export\s*\{\s*default\s*\}\s*from\s*['"]\.\/([^'"]+)['"];?/g;

        const updatedContent = content.replace(
          pattern,
          (match, componentName) => {
            console.log(
              `  ${itemPath}: ${match} -> export { ${componentName} } from "./${componentName}";`
            );
            return `export { ${componentName} } from "./${componentName}";`;
          }
        );

        if (updatedContent !== content) {
          fs.writeFileSync(itemPath, updatedContent, "utf8");
          updatedCount++;
        }
      }
    });
  }

  if (fs.existsSync(uiDir)) {
    processDirectory(uiDir);
    console.log(`✅ Updated ${updatedCount} index.jsx files\n`);
  } else {
    console.log("❌ src/ui directory not found!\n");
  }

  return updatedCount;
}

// Step 2: Update all import statements to use named imports
function updateComponentImports() {
  console.log("🔄 Updating component imports to named imports...");

  // Get list of UI components from directory structure
  const uiComponents = [];
  const uiDir = "./src/ui";

  if (fs.existsSync(uiDir)) {
    const items = fs.readdirSync(uiDir);
    items.forEach((item) => {
      const itemPath = path.join(uiDir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        uiComponents.push(item);
      }
    });
  }

  console.log(`Found UI components: ${uiComponents.join(", ")}`);

  let updatedCount = 0;

  function updateImportsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let hasChanges = false;

      uiComponents.forEach((component) => {
        // Pattern: import ComponentName from "path/to/ComponentName"
        const pattern = new RegExp(
          `import\\s+${component}\\s+from\\s+(['"]([^'"]*\\/${component})['"]);?`,
          "g"
        );

        content = content.replace(pattern, (match, quote, importPath) => {
          hasChanges = true;
          const newImport = `import { ${component} } from ${quote};`;
          console.log(
            `  ${path.relative(".", filePath)}: ${match} -> ${newImport}`
          );
          return newImport;
        });
      });

      if (hasChanges) {
        fs.writeFileSync(filePath, content, "utf8");
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      return false;
    }
  }

  function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // Skip certain directories
        if (!["node_modules", ".git", "dist", "build"].includes(item)) {
          processDirectory(itemPath);
        }
      } else if (/\.(js|jsx|ts|tsx)$/.test(item) && item !== "index.jsx") {
        if (updateImportsInFile(itemPath)) {
          updatedCount++;
        }
      }
    });
  }

  processDirectory("./src");
  console.log(`✅ Updated imports in ${updatedCount} files\n`);

  return updatedCount;
}

// Main execution
console.log("🚀 Starting export and import updates...\n");

const exportUpdates = updateIndexExports();
const importUpdates = updateComponentImports();

console.log("📊 Summary:");
console.log(`  - Updated ${exportUpdates} index.jsx files`);
console.log(`  - Updated imports in ${importUpdates} files`);
console.log(
  "\n🎉 All done! Test your application to make sure everything works."
);
