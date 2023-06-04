const { ObjectId } = require('mongodb');


const dataSchema = {
  _id: ObjectId,
  name: String,
  age: Number,
  email: String
  };

module.exports = dataSchema;
