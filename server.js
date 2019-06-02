const server = require('express')();

const db = require('./src/db');
const config = require('./src/config');
const debug = require('./src/helpers/debugger');

if (config.appEnv !== 'test') {
  db.connect(config.dbUrl)
    .then(() => debug('db', 'Successfully connected to database'))
    .catch(err => debug('db', err.message));
}

require('./src/routes')(server);

server.listen(config.appPort, async () => {
  debug('entrypoint', `Server running on port: ${config.appPort}`);
});

module.exports = server;
