const { isAuthenticated } = require('../middlewares');
const healthController = require('../controllers/health');


module.exports = (router) => {
  router.get('/health', isAuthenticated, healthController.index);
};
