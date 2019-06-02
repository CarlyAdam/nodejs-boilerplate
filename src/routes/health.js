const healthController = require('../controllers/health');

module.exports = (router) => {
  router.get('/health', healthController.index);
};
