const IndexController = require('../controllers/index.js');

module.exports = function(app) {
	// 首页
	app.get('/', IndexController.index);
}