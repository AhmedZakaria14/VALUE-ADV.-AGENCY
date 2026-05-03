const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const files = fs.readdirSync(portfolioDir);

let newImages = [];

files.forEach((file, index) => {
  if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
    // Create a clean filename
    const ext = path.extname(file);
    const cleanName = `work-${index + 1}${ext}`;
    
    const oldPath = path.join(portfolioDir, file);
    const newPath = path.join(portfolioDir, cleanName);
    
    fs.renameSync(oldPath, newPath);
    newImages.push(`/portfolio/${cleanName}`);
  }
});

console.log(JSON.stringify(newImages, null, 2));
