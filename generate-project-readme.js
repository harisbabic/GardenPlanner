// utils/generate-project-readme.js
const fs = require('fs');
const path = require('path');

const excludeExtensions = ['.pkl', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.txt'];
const excludeDirectories = ['node_modules', '.git', '.vscode', 'venv', '.bak'];
const excludeFiles = ['package-lock.json'];

function log(message) {
    console.log(`[DEBUG]: ${message}`);
}

function generateReadmeForDirectory(directoryPath, directoryName, depth = 0) {
    let readmeContent = `${'#'.repeat(depth + 1)} ${directoryName}\n\n`;

    const files = fs.readdirSync(directoryPath);
    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (!excludeDirectories.includes(file)) {
                log(`Including directory: ${file}`);
                readmeContent += generateReadmeForDirectory(filePath, file, depth + 1);
            } else {
                log(`Excluding directory: ${file}`);
            }
        } else if (stat.isFile()) {
            if (file === 'package.json' || (!excludeFiles.includes(file) && !excludeExtensions.includes(path.extname(file)))) {
                log(`Including file: ${file}`);
                readmeContent += `### ${file}\n\n`;
                readmeContent += '```' + path.extname(file).slice(1) + '\n';
                readmeContent += fs.readFileSync(filePath, 'utf-8') + '\n';
                readmeContent += '```\n\n';
            } else {
                log(`Excluding file: ${file}`);
            }
        }
    });

    return readmeContent;
}

const rootDirs = ['/Users/ASRock/Node/projects/GardenPlanner'];
let fullReadmeContent = '# Project Documentation\n\n';

rootDirs.forEach(dir => {
    fullReadmeContent += generateReadmeForDirectory(dir, path.basename(dir));
});

fs.writeFileSync(path.join('/Users/ASRock/Node/projects/GardenPlanner', 'README.md'), fullReadmeContent);
console.log('/Users/ASRock/Node/projects/GardenPlanner/README.md generated successfully.');
