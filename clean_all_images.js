const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const files = fs.readdirSync(portfolioDir);

let validImages = [];

files.forEach(file => {
  if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
    validImages.push(file);
  }
});

// Sort them so the order is consistent
validImages.sort();

let counter = 1;
let newImages = [];

// First pass: rename to temp names to avoid collisions
validImages.forEach(file => {
  const ext = path.extname(file);
  const tempName = `temp_rename_${counter}${ext}`;
  fs.renameSync(path.join(portfolioDir, file), path.join(portfolioDir, tempName));
  counter++;
});

// Second pass: rename to final clean names
const tempFiles = fs.readdirSync(portfolioDir).filter(f => f.startsWith('temp_rename_'));
counter = 1;

tempFiles.forEach(file => {
  const ext = path.extname(file);
  const finalName = `work-${counter}${ext}`;
  fs.renameSync(path.join(portfolioDir, file), path.join(portfolioDir, finalName));
  newImages.push(`/portfolio/${finalName}`);
  counter++;
});

console.log(`Renamed ${newImages.length} images.`);

// Update PortfolioGallery.tsx
const galleryPath = path.join(__dirname, 'components', 'PortfolioGallery.tsx');
let galleryContent = fs.readFileSync(galleryPath, 'utf8');

const arrayRegex = /const allImages = \[.*?\];|const allImages = Array\.from\(.*?\);/s;
const newArrayStr = `const allImages = Array.from({ length: ${newImages.length} }, (_, i) => \`/portfolio/work-\${i + 1}.jpeg\`);`;

if (galleryContent.match(arrayRegex)) {
  galleryContent = galleryContent.replace(arrayRegex, newArrayStr);
  fs.writeFileSync(galleryPath, galleryContent, 'utf8');
  console.log(`Updated PortfolioGallery.tsx with ${newImages.length} images.`);
}

// Update HomeClient.tsx
const homePath = path.join(__dirname, 'components', 'HomeClient.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// The slides use work-1, work-2, work-3, which are now guaranteed to exist.
// The preview uses work-1 to work-8, which are also guaranteed to exist.
// Let's just make sure they are using the clean names.
const homeRegex = /"\/portfolio\/WhatsApp Image.*?"/g;
if (homeContent.match(homeRegex)) {
  let i = 1;
  homeContent = homeContent.replace(homeRegex, () => `"/portfolio/work-${i++}.jpeg"`);
  fs.writeFileSync(homePath, homeContent, 'utf8');
  console.log("Updated HomeClient.tsx to use clean names.");
}
