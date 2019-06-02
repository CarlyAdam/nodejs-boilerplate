const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports = (dataFactory = null, fakeDataAmount = 10) => {
  before(async () => {
    mongoServer = new MongoMemoryServer();
    try {
      const connectionString = await mongoServer.getConnectionString();
      await mongoose.connect(connectionString, { useNewUrlParser: true });
      if (dataFactory) {
        await dataFactory(fakeDataAmount);
      }
    } catch (error) {
      throw error;
    }
  });

  after(async () => {
    try {
      await mongoose.disconnect();
      await mongoServer.stop();
    } catch (error) {
      throw error;
    }
  });
};
