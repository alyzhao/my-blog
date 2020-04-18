const articlesRouter = require('./articles');

module.exports = function(app) {
  // 文章
  app.use('/articles', articlesRouter);

	// 首页
  app.get('*', (req, res) => {
    res.render('index', {
      title: 'Allen\'s blog | 青春须早为 岂能长少年'
    });
  });
};
