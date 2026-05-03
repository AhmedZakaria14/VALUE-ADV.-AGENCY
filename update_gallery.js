const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const files = fs.readdirSync(portfolioDir);

let validImages = [];

files.forEach(file => {
  if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
    validImages.push(`/portfolio/${file}`);
  }
});

// Sort them nicely
validImages.sort();

const galleryPath = path.join(__dirname, 'components', 'PortfolioGallery.tsx');
let content = fs.readFileSync(galleryPath, 'utf8');

// Replace the allImages array
const arrayRegex = /const allImages = \[.*?\];|const allImages = Array\.from\(.*?\);/s;
const newArrayStr = `const allImages = ${JSON.stringify(validImages, null, 2)};`;

if (content.match(arrayRegex)) {
  content = content.replace(arrayRegex, newArrayStr);
  fs.writeFileSync(galleryPath, content, 'utf8');
  console.log(`Updated PortfolioGallery.tsx with ${validImages.length} images.`);
} else {
  console.log("Could not find allImages array in PortfolioGallery.tsx");
}
