const fs = require('fs');

class TemplateCombiner {
  constructor(renderedHtmlArray, templatePath) {
    this.renderedHtmlArray = renderedHtmlArray;
    this.templatePath = templatePath;
  }

  generateCombinedHtml() {
    return new Promise((resolve, reject) => {
      const templateHtml = fs.readFileSync(this.templatePath, 'utf-8');
      let combinedHtml = templateHtml;

      this.renderedHtmlArray.forEach((renderedHtml, index) => {
        const divId = `template${index + 1}`;
        const divContent = `<div>${renderedHtml}</div>`;
        combinedHtml = combinedHtml.replace(`{{${divId}}}`, divContent);
      });
      
      resolve(combinedHtml);
    });
  }
}

module.exports = TemplateCombiner;
