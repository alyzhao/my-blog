const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'; 	// 这是使用hot-middleware必须配置的项目

module.exports = {
	entry: {
		index: ['react-hot-loader/patch', hotMiddlewareScript, path.join(__dirname, './app/index/main.js')]
	},
	devtool: 'inline-source-map',   // 跟踪错误堆栈
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.(css|less)$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: path.join(__dirname, './build/'),
		filename: "[name].bundle.js", 
		publicPath: '/build/'		// 测试只是打包的文件, 在 webpack-dev-middleware 中的前缀, 如果吧devtool 改成 'source-map', 这个需要改成 url 的形式
	}
}