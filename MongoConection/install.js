const fs = require('fs');
const path = require('path');

const copyFolderSync = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      copyFolderSync(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
};

const srcDir = path.join(__dirname, '.', 'src');
const destDir = path.join(__dirname, '..', 'src' );

copyFolderSync(srcDir, destDir);

console.log('¡Instalación exitosa!');
