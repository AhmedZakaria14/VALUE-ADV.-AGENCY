const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, 'components', 'PortfolioGallery.tsx');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

const oldArrayRegex = /const allImages = Array\.from\(\{ length: 169 \}, \(_, i\) => `\/portfolio\/work-\${i \+ 1}\.jpeg`\);/;

const newArrayStr = `const cloudinaryImages = [
  {
    src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817298/whatsapp-51_l6yrga.jpg",
    alt: "تصميم وتنفيذ لوحات إعلانية حروف بارزة للواجهات"
  },
  {
    src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817299/whatsapp-55_b8s60b.jpg",
    alt: "تركيب لوحة حرف مضيء واجهة خارجية"
  }
];

const importedImages = Array.from({ length: 169 }, (_, i) => ({
  src: \`/portfolio/work-\${i + 1}.jpeg\`,
  alt: \`أعمال لوحات المحلات والحروف البارزة الرياض - مشروع \${i + 1}\`
}));

const allImages = [...cloudinaryImages, ...importedImages];`;

portfolioContent = portfolioContent.replace(oldArrayRegex, newArrayStr);

portfolioContent = portfolioContent.replace(
  /\{allImages\.slice\(0, visibleCount\)\.map\(\(img, index\) => \(/g,
  '{allImages.slice(0, visibleCount).map((item, index) => ('
);

portfolioContent = portfolioContent.replace(/key=\{img\}/g, 'key={item.src}');
portfolioContent = portfolioContent.replace(/src=\{img\}/g, 'src={item.src}');
portfolioContent = portfolioContent.replace(/alt=\{`عمل \${index \+ 1}`\}/g, 'alt={item.alt}');
portfolioContent = portfolioContent.replace(/src=\{allImages\[selectedImageIndex\]\}/g, 'src={allImages[selectedImageIndex].src}');
portfolioContent = portfolioContent.replace(/alt=\{`عمل \${selectedImageIndex \+ 1}`\}/g, 'alt={allImages[selectedImageIndex].alt}');

fs.writeFileSync(portfolioPath, portfolioContent, 'utf8');

const homePath = path.join(__dirname, 'components', 'HomeClient.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

const oldSlides = `  const slides = [
    {
      bg: "/portfolio/work-1.jpeg",
      title: "لوحات اعلانية حديثة",
      subtitle: "أحدث تقنيات تصنيع لوحات المحلات",
      highlight: "حديثة"
    },
    {
      bg: "/portfolio/work-2.jpeg",
      title: "مع الإلتزام بخدمة ما بعد البيع",
      subtitle: "ملتزمون بالجودة العالية والنتائج",
      highlight: ""
    },
    {
      bg: "/portfolio/work-3.jpeg",
      title: "تصاميم إبداعية مبتكرة",
      subtitle: "نجسد هويتك التجارية بأفضل صورة",
      highlight: "مبتكرة"
    }
  ];`;

const newSlides = `  const slides = [
    {
      bg: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817298/whatsapp-51_l6yrga.jpg",
      title: "لوحات اعلانية حديثة",
      subtitle: "أحدث تقنيات تصنيع لوحات المحلات",
      highlight: "حديثة"
    },
    {
      bg: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817299/whatsapp-55_b8s60b.jpg",
      title: "مع الإلتزام بخدمة ما بعد البيع",
      subtitle: "ملتزمون بالجودة العالية والنتائج",
      highlight: ""
    },
    {
      bg: "/portfolio/work-1.jpeg",
      title: "تصاميم إبداعية مبتكرة",
      subtitle: "نجسد هويتك التجارية بأفضل صورة",
      highlight: "مبتكرة"
    }
  ];`;

homeContent = homeContent.replace(oldSlides, newSlides);

const oldPreviewMap = `            {[
              "/portfolio/work-1.jpeg",
              "/portfolio/work-2.jpeg",
              "/portfolio/work-3.jpeg",
              "/portfolio/work-4.jpeg",
              "/portfolio/work-5.jpeg",
              "/portfolio/work-6.jpeg",
              "/portfolio/work-7.jpeg",
              "/portfolio/work-8.jpeg"
            ].map((img, idx) => (`;

const newPreviewMap = `            {[
              { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817298/whatsapp-51_l6yrga.jpg", alt: "تصميم وتنفيذ لوحات إعلانية حروف بارزة للواجهات" },
              { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777817299/whatsapp-55_b8s60b.jpg", alt: "تركيب لوحة حرف مضيء واجهة خارجية" },
              { src: "/portfolio/work-1.jpeg", alt: "تصميم لوحات استرشادية مضيئة" },
              { src: "/portfolio/work-2.jpeg", alt: "تركيب حروف بارزة اكريليك" },
              { src: "/portfolio/work-3.jpeg", alt: "لوحات محلات كلادينج مع حروف بارزة" },
              { src: "/portfolio/work-4.jpeg", alt: "تصنيع لوحات محلات خارجية وإضاءة LED" },
              { src: "/portfolio/work-5.jpeg", alt: "لوحة واجهة محل بتصميم حديث" },
              { src: "/portfolio/work-6.jpeg", alt: "لوحة إعلانية حروف 3D بارزة" }
            ].map((item, idx) => (`;

homeContent = homeContent.replace(oldPreviewMap, newPreviewMap);
homeContent = homeContent.replace(/src=\{img\}/g, 'src={item.src}');
homeContent = homeContent.replace(/alt=\{`لوحة حروف بارزة أكريليك مضيئة – الرياض \$\{idx \+ 1\}`\}/g, 'alt={item.alt}');

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Done refactoring.");
