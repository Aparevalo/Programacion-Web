const fs = require('fs');

class TemplateRenderer {
  constructor(data) {
    this.data = data;
  }

  render(templateFilePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(templateFilePath, 'utf8', (err, template) => {
        if (err) {
          console.error('Error al leer el archivo de plantilla:', err);
          reject(err);
          return;
        }

        const html = this.interpolate(template);
        resolve(html);
      });
    });
  }
  
  renderSimple(templateFilePath) {
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

interpolate(template) {
  let result = '';

  for (const item of this.data) {
    let html = template;

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
        html = html.replace(regex, value);
      }
    }

    result += html;
  }

  return result;
}



}

module.exports = TemplateRenderer;
