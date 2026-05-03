const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'portfolio');
const files = fs.readdirSync(targetDir).filter(f => f.startsWith('WhatsApp Image'));

const images = files.map(f => `/portfolio/${f}`);
console.log(JSON.stringify(images, null, 2));
