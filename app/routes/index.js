const IndexController = require('../controllers/index.js');
const AboutController = require('../controllers/about.js');

module.exports = function(app) {
	// 首页
  app.get('/', IndexController.index);
    
  app.get('*', IndexController.index)
}