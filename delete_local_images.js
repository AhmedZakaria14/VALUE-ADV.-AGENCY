const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'public', 'portfolio'),
  __dirname
];

let deletedCount = 0;

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (
        (file.startsWith('work-') && file.endsWith('.jpeg')) ||
        (file.startsWith('WhatsApp') && (file.endsWith('.jpeg') || file.endsWith('.jpg')))
      ) {
        fs.unlinkSync(path.join(dir, file));
        deletedCount++;
      }
    }
  }
}

console.log(`Deleted ${deletedCount} images.`);

// Now we need to remove references to the deleted local images from our code
const galleryPath = path.join(__dirname, 'components', 'PortfolioGallery.tsx');
if (fs.existsSync(galleryPath)) {
  let content = fs.readFileSync(galleryPath, 'utf8');
  content = content.replace(/const importedImages = Array\.from\(\{ length: 169 \}, \(_, i\) => \(\{\n\s*src: `\/portfolio\/work-\$\{i \+ 1\}\.jpeg`,\n\s*alt: `أعمال لوحات المحلات والحروف البارزة الرياض - مشروع \$\{i \+ 1\}`\n\}\)\);\n\nconst allImages = \[\.\.\.cloudinaryImages, \.\.\.importedImages\];/g, 'const allImages = [...cloudinaryImages];');
  fs.writeFileSync(galleryPath, content, 'utf8');
}

const homePath = path.join(__dirname, 'components', 'HomeClient.tsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  // For the slides, work-1.jpeg is there
  // If we remove it, we need a fallback or just use the first cloudinary image.
  content = content.replace(/{[\s\S]*?bg: "\/portfolio\/work-1.jpeg",[\s\S]*?highlight: "مبتكرة"\n\s*}/g, `{
      bg: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817298/whatsapp-51_l6yrga.jpg",
      title: "تصاميم إبداعية مبتكرة",
      subtitle: "نجسد هويتك التجارية بأفضل صورة",
      highlight: "مبتكرة"
    }`);
    
  // For the grid maps, remove the non-cloudinary ones
  const oldGrid = `              { src: "/portfolio/work-1.jpeg", alt: "تصميم لوحات استرشادية مضيئة" },
              { src: "/portfolio/work-2.jpeg", alt: "تركيب حروف بارزة اكريليك" },
              { src: "/portfolio/work-3.jpeg", alt: "لوحات محلات كلادينج مع حروف بارزة" },
              { src: "/portfolio/work-4.jpeg", alt: "تصنيع لوحات محلات خارجية وإضاءة LED" },
              { src: "/portfolio/work-5.jpeg", alt: "لوحة واجهة محل بتصميم حديث" },
              { src: "/portfolio/work-6.jpeg", alt: "لوحة إعلانية حروف 3D بارزة" }`;
              
  content = content.replace(oldGrid, '');
  // Remove the trailing comma if it was left
  content = content.replace(/whatsapp-55_b8s60b\.jpg", alt: "تركيب لوحة حرف مضيء واجهة خارجية" },\n\s*\]\.map/g, 'whatsapp-55_b8s60b.jpg", alt: "تركيب لوحة حرف مضيء واجهة خارجية" }\n            ].map');

  fs.writeFileSync(homePath, content, 'utf8');
}
