const path = require('path');
const { config , TemplateRenderer } = require('./controller');
const createMongoDBConnection = require('./connection');
const server = require('./server');
const templatePath = path.join(__dirname, './', 'templates', 'template.html');

(async () => {
  try {
    const mongoDBConnection = createMongoDBConnection(config);
    const data = await mongoDBConnection.connectAndGetData();

    const templateRenderer = new TemplateRenderer(data);

   templateRenderer.render(templatePath)
  .then((html) => {
    server.startServer(html);
  })
  .catch((err) => {
    console.error('Ocurrió un error:', err);
  });
   
  } catch (error) {
    console.error('Error en la aplicación:', error);
  }
})();
