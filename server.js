const app = require('express')();

const db = require('./src/db');
const config = require('./src/config');
const debug = require('./src/helpers/debugger');

app.listen(config.appPort, async () => {
  debug('entrypoint', `Server running on port: ${config.appPort}`);

  try {
    await db.connect(config.dbUrl);
  } catch (error) {
    debug(error.message);
  }
});
