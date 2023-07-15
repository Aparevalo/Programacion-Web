const { ObjectId } = require('mongodb');

const dataSchema = {
  _id: ObjectId,
  Titulo: String,
  Fecha: String,
  Foto: String,
  Contenido: String
  };

module.exports = dataSchema;
