const path = require('path');
const { userConfig,productConfig,noticiasConfig ,UserSchema,productSchema,noticiasSchema ,TemplateRenderer,TemplateRendererSimple, TemplateCombiner } = require('./controller');
const createMongoDBConnection = require('./connection');
const server = require('./server');
const templatePath = path.join(__dirname, './', 'templates', 'index.html');
const UserTemplatePath = path.join(__dirname, './', 'templates', 'user.html');
const ProductTemplatePath = path.join(__dirname, './', 'templates', 'product.html');
const NoticiasTemplatePath = path.join(__dirname, './', 'templates', 'noticias.html');
const NavbarTemplatePath = path.join(__dirname, './', 'templates', 'navbar.html');

(async () => {
  try {
    //const userMongoDBConnection = createMongoDBConnection(userConfig);
    //const productMongoDBConnection = createMongoDBConnection(productConfig);
   // const userData = await userMongoDBConnection.connectAndGetData(UserSchema);
    //const userHtml = new TemplateRenderer(userData);
    //const renderedUserHtml = await userHtml.render(UserTemplatePath);
    //const productData = await productMongoDBConnection.connectAndGetData(productSchema);
    //const productHtml = new TemplateRenderer(productData);
    //const renderedProductHtml = await productHtml.render(ProductTemplatePath);
    const noticiasMongoDBConnection = createMongoDBConnection(noticiasConfig);
    const noticiasData = await noticiasMongoDBConnection.connectAndGetData(noticiasSchema);
    const noticiasHtml = new TemplateRenderer(noticiasData);
    const renderedNoticiasHtml = await noticiasHtml.render(NoticiasTemplatePath);
    const NavbarHtml =  new TemplateRendererSimple();
    const renderedNavbarHtml = await noticiasHtml.render(NavbarTemplatePath);
    const templateCombiner = new TemplateCombiner([renderedNavbarHtml,renderedNoticiasHtml], templatePath);
    

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
