
//const userConfig = require('./config/userConfig');
//const productConfig = require('./config/productConfig');
//const userSchema = require('./schemas/userSchema');
//const productSchema = require('./schemas/productSchema');
const noticiasConfig =require('./config/noticiasConfig');
const noticiasSchema =require('./schemas/noticiasSchema');
const MongoDBConnection = require('./connection');
const TemplateRenderer = require('../../TemplateRenderer');
const TemplateRendererSimple = require('../../TemplateRenderSimple');
const TemplateCombiner = require('../../TemplateCombiner');

module.exports = {
  //userConfig,
  //productConfig,
  //userSchema,
  //productSchema,
  noticiasConfig,
  noticiasSchema,
  MongoDBConnection,
  TemplateRenderer,
  TemplateRendererSimple,
  TemplateCombiner,
};
