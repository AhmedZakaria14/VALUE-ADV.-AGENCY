const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const files = fs.readdirSync(portfolioDir);

// Sort files numerically to ensure consistent renaming
files.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)?.[0] || '0');
  const numB = parseInt(b.match(/\d+/)?.[0] || '0');
  return numA - numB;
});

let newImages = [];
let counter = 1;

files.forEach((file) => {
  if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
    const ext = path.extname(file);
    const cleanName = `work-${counter}${ext}`;
    
    const oldPath = path.join(portfolioDir, file);
    const newPath = path.join(portfolioDir, `temp_${cleanName}`); // Temporary name to avoid collisions
    
    fs.renameSync(oldPath, newPath);
    counter++;
  }
});

// Second pass to remove 'temp_' prefix
const tempFiles = fs.readdirSync(portfolioDir);
let finalImages = [];
let finalCounter = 1;

tempFiles.forEach((file) => {
  if (file.startsWith('temp_')) {
    const finalName = file.replace('temp_', '');
    fs.renameSync(path.join(portfolioDir, file), path.join(portfolioDir, finalName));
    finalImages.push(`/portfolio/${finalName}`);
    finalCounter++;
  }
});

console.log(`Total images processed: ${finalImages.length}`);
