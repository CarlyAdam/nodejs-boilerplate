const mongoose = require('mongoose');
const debug = require('debug')('app:db');

module.exports.connect = async (dbUrl) => {
  if (!dbUrl) {
    throw new Error('Database url not defined');
  }
  await mongoose.connect(dbUrl, { useNewUrlParser: true });
  debug('Successfully connected to database');
};
