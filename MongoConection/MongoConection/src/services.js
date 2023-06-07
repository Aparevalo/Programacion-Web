const fs = require('fs');
const path = require('path');

function createAppHtml(interpolatedHtml) {
  const outputPath = path.join(__dirname, 'templates', 'app.html');

  // Escribir el contenido interpolado en el archivo de salida
  fs.writeFile(outputPath, interpolatedHtml, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo de salida:', err);
    } else {
      console.log('Archivo de salida generado correctamente:', outputPath);
    }
  });
}

module.exports = { createAppHtml };