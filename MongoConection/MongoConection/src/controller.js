
const userConfig = require('./config/userConfig');
const productConfig = require('./config/productConfig');
const userSchema = require('./schemas/userSchema');
const productSchema = require('./schemas/productSchema');
const MongoDBConnection = require('./connection');
const TemplateRenderer = require('../../TemplateRenderer');
const TemplateCombiner = require('../../TemplateCombiner');

module.exports = {
  userConfig,
  productConfig,
  userSchema,
  productSchema,
  MongoDBConnection,
  TemplateRenderer,
  TemplateCombiner,
};
