const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const portfolioDir = path.join(__dirname, 'public', 'portfolio');

const rootFiles = fs.readdirSync(rootDir);
let movedCount = 0;

rootFiles.forEach(file => {
  if (file.startsWith('WhatsApp Image') || file.startsWith('work-') || file.startsWith('image ')) {
    if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const oldPath = path.join(rootDir, file);
      const newPath = path.join(portfolioDir, file);
      
      if (!fs.existsSync(newPath)) {
        fs.copyFileSync(oldPath, newPath);
        movedCount++;
      }
    }
  }
});

console.log(`Copied ${movedCount} missing images from root to portfolio.`);
