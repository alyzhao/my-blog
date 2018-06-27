const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'; 	// 这是使用hot-middleware必须配置的项目

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: [
			'react-hot-loader/patch',
			hotMiddlewareScript,
			path.join(__dirname, './frontend/assets/less/common.css'),
			path.join(__dirname, './frontend/main.js')
		],
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
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'images/[name].[hash:7].[ext]'
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)\w*/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'fonts/[name].[hash:7].[ext]'
					}
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({filename: 'style/app.css'})
	],
	output: {
		path: path.join(__dirname, './build/'),
		filename: "[name].bundle.js", 
		publicPath: '/build/'		// 测试只是打包的文件, 在 webpack-dev-middleware 中的前缀, 如果吧devtool 改成 'source-map', 这个需要改成 url 的形式
	},
	resolve: {
    alias: {
      'components': path.join(__dirname, './frontend/components'),
      'assets': path.join(__dirname, './frontend/assets'),
      'containers': path.join(__dirname, './frontend/containers'),
      'constants': path.join(__dirname, './frontend/constants'),
      '@': path.join(__dirname, './frontend')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.less']
  }
}