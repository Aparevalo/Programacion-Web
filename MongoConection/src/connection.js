const { MongoClient } = require('mongodb');

class MongoDBConnection {
  constructor(config) {
    this.mongoURL = config.mongoURL;
    this.dbName = config.dbName;
    this.collectionName = config.collectionName;
  }

  async connectAndGetData() {
    try {
      const client = await MongoClient.connect(this.mongoURL);
      const db = client.db(this.dbName);
      const collection = db.collection(this.collectionName);

      const data = await collection.find().toArray();

      client.close();

      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }
}

module.exports = config => new MongoDBConnection(config);
