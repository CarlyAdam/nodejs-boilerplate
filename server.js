const app = require('express')();
const debug = require('debug')('app:entrypoint');

const config = require('./src/config');

const db = require('./src/db');

app.listen(config.appPort, async () => {
  debug(`Server running on port: ${config.appPort}`);

  try {
    await db.connect(config.dbUrl);
  } catch (error) {
    debug(error.message);
  }
});
