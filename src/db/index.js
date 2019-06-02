const mongoose = require('mongoose');

module.exports.connect = async (dbUrl) => {
  if (!dbUrl) {
    throw new Error('Database url not defined');
  }
  await mongoose.connect(dbUrl, { useNewUrlParser: true });
};
