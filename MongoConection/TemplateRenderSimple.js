const fs = require('fs');

class TemplateRendererSimple {
  constructor() {}

  render(templateFilePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(templateFilePath, 'utf8', (err, template) => {
        if (err) {
          console.error('Error al leer el archivo de plantilla:', err);
          reject(err);
          return;
        }

        resolve(template);
      });
    });
  }
}

module.exports = TemplateRendererSimple;