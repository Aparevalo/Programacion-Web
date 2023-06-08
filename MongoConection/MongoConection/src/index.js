const path = require('path');
const { userConfig,productConfig ,UserSchema,productSchema ,TemplateRenderer, TemplateCombiner } = require('./controller');
const createMongoDBConnection = require('./connection');
const server = require('./server');
const templatePath = path.join(__dirname, './', 'templates', 'index.html');
const UserTemplatePath = path.join(__dirname, './', 'templates', 'user.html');
const ProductTemplatePath = path.join(__dirname, './', 'templates', 'product.html');

(async () => {
  try {
    const userMongoDBConnection = createMongoDBConnection(userConfig);
    const productMongoDBConnection = createMongoDBConnection(productConfig);
    const userData = await userMongoDBConnection.connectAndGetData(UserSchema);
    const userHtml = new TemplateRenderer(userData);
    const renderedUserHtml = await userHtml.render(UserTemplatePath);
    const productData = await productMongoDBConnection.connectAndGetData(productSchema);
    const productHtml = new TemplateRenderer(productData);
    const renderedProductHtml = await productHtml.render(ProductTemplatePath);
    const templateCombiner = new TemplateCombiner([renderedUserHtml, renderedProductHtml], templatePath);
    

    templateCombiner.generateCombinedHtml()
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
