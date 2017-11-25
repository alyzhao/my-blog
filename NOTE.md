# MyBlog
use node to develop my own technology and life blog.

## 前期准备

> (1). 想用的技术

- express
	- ejs作为模板引擎

- webpack 打包文件

- react 前端框架

- less css预处理
	- 需要学习, webpack能解析less么？

- bower 作为包管理器
	- jquery ?

> (2). 需要解决的问题

- webpack react less 如何组合?    -- 参考gallery-by-react
- 有了react还需要bower么?

- 工程目录的建立MVC, 应该如何构成

- 使用node就得学习异步编程的几种解决方案
	- 再次熟悉Promise, 试着自己实现Proise
	- 了解 await 和 sync

## 开发时间表

> 8月26日
	(1). 查看gallery-by-react, 查看react如何和webpack搭配, 以及less如何和webpack搭配 		-- ok
		- 大致学习webpack			-- ok
		- 大致学习less				-- learn less
		- 再熟练下react
	(2). 大致了解express结构, 构件项目结构  -- 这个应该是自己配置的, 开源的			-- 可能就用以前那个结构
	
> 8月27日
	(1). 学习express + webpack + react搭建项目, 基本搭出项目骨架 			-- 试用了webpack和react, 还未加上express
	(2). 继续熟练react

	今天必须搭出个骨架来!!!

	express结构:
	1.  app 目录下放MVC
		public 目录下放静态资源
		routes 目录下放route

	2. 考虑前后端分离, 全用ajax来写

	conclusion:
	1. weback 配合 express 需要使用两个中间件 
		- webpack-dev-middleware(将react代码转义成浏览器可读的通用js)
		- webpack-hot-middleware(中间件可以检测到文件的修改并通知客户端重新渲染组件)

	2. webpack 配合使用 react	
		- $ npm install webpack --save-dev, 安装 webpack 到开发环境中
			- 目录结构 app -- 原始文件, build -- 打包测试, dist -- 打包发布

			- 配置 webpack.config.js
			```
			const path = require('path');
			module.exports = {
				entry: path.join(__dirname, 'app/main.js'),
				devServer:{
					port: 8080,  	// 默认端口
					contentBase: "./build", 		 	//本地服务器所加载的页面所在的目录
					hot: true,							// HMR 开启
					historyApiFallback: true 			//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
				},
				output: {
					filename: 'bundle.js',
					path: path.join(__dirname, 'build')
				}
			}

			- 使用 webpack-dev-server 服务器工具, 当代码修改时能刷新, 但是是全部刷新, 这个打包的文件只是在缓存当中
			$ npm install --save-dev webpack-dev-server

			- 启用 HRM 热加载, 不需要刷新页面, 这仅仅是热跟新模块的, 主入口文件变了依旧刷新
			在主入口文件中 index.js :  
			```
			if (module.hot) {
				module.hot.accept('./component.js', function() {
					// accept 第一个参数是模块, 第二个就是回调, 如果参数为空则重新加载模块
				});
			}

		- $ npm install --save react react-dom, 安装react
			- $ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0, 安装 babel 相关依赖
			- $ npm install --save-dev react-hot-loader@3.0.0-beta.6, 安装 react 热更新插件
			配置 .babelrc :
			```
			{
				"presets": [
					"es2015",
					"stage-0",		// 数字越小, 语言规范越新
					"react"
				],
				"plugins": [
					"react-hot-loader/babel"		// 开启react模块热加载
				]
			}

			最终 webpack.configjs :
			```
			const path = require('path');
			const webpack = require('webpack');

			module.exports = {
				entry: [
					'react-hot-loader/patch',
					'webpack/hot/only-dev-server',
					path.join(__dirname, 'app/main.js')
				],
				devtool: 'inline-source-map',   // 跟踪错误堆栈
				devServer:{
					port: 8080,  	// 默认端口
					contentBase: path.join(__dirname, './build'), 		// //本地服务器所加载的页面所在的目录
					publicPath: '/',
					hot: true
					// inline: true,
					// historyApiFallback: true 			//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
				},
				module: {
					rules: [
						{
							test: /\.(js|jsx)$/,
							use: [
								'babel-loader'
							],
							exclude: /node_modules/		// 除去这个目录下的文件
						},
						{
							test: /\.(css|less)/,
							use: [
								'style-loader',
								'css-loader',
								'less-loader'
							]
						}
					]
				},
				plugins: [
					new webpack.HotModuleReplacementPlugin()
				],
				output: {
					filename: 'bundle.js',
					publicPath: '/',
					path: path.join(__dirname, 'build')
				}
			}

		- npm install --save-dev style-loader css-loader less-loader less, 安装这些css, less依赖
		
		```
		{
			test: /\.(css|less)/,
			use: [
				'style-loader',
				'css-loader',
				'less-loader'
			]
		}

> 8月29日
	(1). 之前几天熟悉了 webpack + react 的开发模式, 今天查看之前的文档, express + webpack + react 的模式
	(2). 继续熟悉 react, react 的数据绑定 

> 9月1日 重新构建了目录, 准备重构了

> 9月3日 开始搭建页面, 搜集相应的信息, 有个大概的页面构成
	(1). head 标签的内容应该怎么写? 每个页面的 description keywords 都不同;百度站长工具, 网站认证, http://zhanzhang.baidu.com/	 -- ok

	(1). 分析页面构成, 搜集案例 

	(2). 搭建出主页出来 no!

> 9月4日 确定博客结构, 开始搭建页面
	(1). 结构:
		栏目

		主页: http://blog.zhangruipeng.me/hexo-theme-icarus/ 参照这个, 两栏式
			左侧文章, 右侧分类,标签

		文章详情页
> 9月5日 确定了首页

> 9月7日把 header 和 footer 搭好

> 9月9日
	(1). 响应式布局
		移动 < 768px < 平板 < 992px < 中等屏幕 < 1200px < 大屏幕
	
> 9月20日 
	(1). 把主页的主要内容搭建出来
		
	(2). 了解 react-router, Redux, 实现 react 的数据交互
		Redux: 快照>? wtf

> 10月7日 
	(1). 今天再次回归这个项目

## 页面设计, 结构设计
	参考网页: 
	http://blog.zhangruipeng.me/hexo-theme-icarus/		
	https://www.linpx.com/

	http://jeanys.me/2016/03/13/build-blog-with-typecho/
	http://infullstack.com/lsm.html
	https://www.liujunyang.com/

	http://sora1.coding.me/
	http://chaoo.oschina.io/

	1. 主页
		左侧: 文章
		右侧: 近期文章, 分类, 标签

	2. 文章详情页 '/article/id'

	3. 归档页

	4. 搜索页

	5. 标签页 '/tags/tagname' 

	5. 关于

	6. 文章分类页 '/category/id'

## 数据库设计

	1. 技术文章表 articalTech
		_id
		description 		
		keywords


	2. 生活文章表 articalDaily

	3. 怎样做 react 的数据交互? https://segmentfault.com/a/1190000004436824

## 站点分析

	1. logo, title 等
		author: Allen Zhao
		title: Allen's blog | 青春须早为 岂能长少年
		description: Allen Zhao 的个人博客, 积累技术心得, 分享生活感悟。
		keywords: Allen Zhao, blog, 个人博客, 个人站, javascript, 前端, 生活感悟
		slogan: 青春须早为 岂能长少年 | 博观而约取 厚积而薄发
		shortcut icon: 尝试express的中间件

## 功能设计

	1. markdown 博文编辑系统, 代码高亮插件

	2. 评论系统
