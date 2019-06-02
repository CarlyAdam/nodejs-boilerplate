const mongoose = require('mongoose');
const debug = require('../helpers/debugger');

module.exports.connect = async (dbUrl) => {
  if (!dbUrl) {
    throw new Error('Database url not defined');
  }
  await mongoose.connect(dbUrl, { useNewUrlParser: true });
  debug('db', 'Successfully connected to database');
};
