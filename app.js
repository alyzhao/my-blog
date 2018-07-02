const path = require('path');

// express 相关
const express = require('express');
const serveStatic = require('serve-static');
const morgan = require('morgan');
// const favicon = require('serve-favicon');

// webpack相关
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// 启动配置
const port = process.env.PORT || 3000;
const app = express();

// webpack
// app.set('env', 'production');
if (app.get('env') === 'development') {
	console.log(app.get('env'));
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler, {
		log: console.log()
	}));
}

// 设置查找动态文件的目录, app.set('views') 可以是数组的形式, 并渲染时会按顺序匹配并渲染
let viewsDirectories = ['./views/index/'];

app.set('views', viewsDirectories.map((dir) => {
	return path.join(__dirname, dir);
}));
app.set('view engine', 'ejs');

// 监听文件修改重启服务器
if (app.get('env') === 'development') {
	// 
	app.set('showStackEror', true);
	app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
	app.locals.pretty = true;	// 不压缩html
}

require('./app/routes')(app); 	// 加载路由

// 因为使用了 webpack-dev-middleware, development 环境下由 前面这个中间件处理 webpack 打包在缓存中的文件, production 下需要设置成dist
// 实质上 development 下静态资源应该都不用 express 来处理, 但是在 production 下需要 serve-static
// 设置静态资源的目录
app.use(serveStatic(path.join(__dirname, './public'), {
	'cacheControl': false 	// 这是个可选 options
}));

// app.use(favicon(path.join(__dirname, './dist', 'favicon.ico')));	// 保存在缓存中的 

app.listen(port, function() {
	console.log('app started on port ' + port);
});