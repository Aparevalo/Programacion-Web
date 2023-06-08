const { ObjectId } = require('mongodb');

const dataSchema = {
  _id: ObjectId,
  name: String,
  price: Number
  };

module.exports = dataSchema;
