const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const targetDir = path.join(rootDir, 'public', 'portfolio');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(rootDir);
files.forEach(file => {
  if (file.startsWith('WhatsApp Image') && file.endsWith('.jpeg')) {
    const oldPath = path.join(rootDir, file);
    const newPath = path.join(targetDir, file);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to public/portfolio/`);
  }
});
