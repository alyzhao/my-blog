# my-blog
use node express react to build my blog

## 记录
- 安装express
- 构建项目目录
	```
	`-- root
	  +-- models
	  +-- app 					-- 开发目录, js, less, img 静态资源都在这儿
	  | +-- index 				-- 主页相关页面的静态资源
	  | | +-- main.jsx 			-- 每个页面的主入口文件, webpack 的 entry 文件
	  | | +-- components.jsx 	-- react 组件文件
	  | | `-- style.less 		-- 样式文件
	  | `-- public	 			-- 公共静态资源存放目录
	  |   +-- img
	  |   +-- js
	  |   `-- style
	  +-- build 				-- 测试目录, 开发环境下的打包后的 bunle.js 都在这儿, 通常只是缓存
	  +-- dist 					-- 生产目录, 测试环境通过后, 放上打包后的文件
	  +-- views					-- 视图目录每个模块对应一个文件夹
	  | `-- index 				-- 主页相关页面
	  |   +-- index.ejs 		-- 引用 webpack 中 output 的文件
	  +-- routes
	  | `-- route.js
	  +-- controllers
	  +-- app.js 	
	  +-- .babelrc
	  +-- packaage.json
	  `-- webpack.config.js
- 构建 express 服务器, 入口文件 app.js, 使用 ejs 模板引擎, 
	- 安装 ejs
	- 安装 serve-static

	- 安装 morgan, 用来监听请求
	- 安装 nodemon, 监听文件修改, 自动重启服务
- 安装 webpack , 打包会把所有用到的静态资源放到一个入口文件`[name].bundle.js`, 所以用`react`开发应把`views`分离出来
	- 安装 webpack 插件
		- style-loader 
		- css-loader 
		- less-loader less
		- file-loader      加载图片, 字体

		- webpack-dev-middleware   			-- 这只是将 bundle 打包的文件放入服务器请求, 与 express 无关
		- webpack-hot-middleware

	- 配置 webpack.config.js
- 安装 react react-dom react-hot-loader, `npm install --save-dev react-hot-loader@3.0.0-beta.6` 必须指定版本否则默认安装是1.x版本
- 安装 babel, npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
	- 配置 .babelrc 
- 编码 app.js
- 编写前端 react 页面
> 2017.9.1 修改了目录结构, 使用 nodemon 监听文件修改, 重启服务, 重新配置 webpack, 基本项目结构搭建完成


## 问题

> 1. express 静态资源加载的问题, webpack 打包的文件, 调试时加载不出来
>> express serve-static 的目录要和 webpack 打包的目录相同 output, 不是这个原因, webpack 生成的文件不经过静态文件资源加载, 不经过 express 的路由, 所以出现这个问题可能是刷新时还未打包好！

> 2. 没有自动刷新, 也没有热更新
>> webpack 实现热加载: 必须在 webpack.config.js 中加上 plugins: [ new webpack.HotModuleReplacementPlugin() ], 且这个热加载是在修改打包文件时才会热加载
>> 修改其他代码如何实现自动重启服务?
- 使用 grunt grunt-concurrent grunt-contrib-watch grunt-nodemon, 并配置 grunt
- 使用 nodemon 	推荐使用, 在 package.json scripts start 设置为 nodemon app.js
```nodemon.json
{
	"restartable": "rs",
	"ignore": [
		".git",
		"node_modules/**",
		"views/**",
		"README.md",
		"public/**"
	],
	"verbose": true,
	"execMap": {
		"js": "node --harmony"
	},
	"watch": [
		"./"
	],
	"env": {
		"NODE_ENV": "development"
	},
	"ext": "js json"
}
```
- 使用 supervisor

> 3. react-hot-loader 并没有起作用, 或者本身`react-hot-loader`就没什么卵用? 在热加载中修改`react`组件的`state`能否实现热加载?
>> 使用`react-hot-loader`会保留状态, 比如输入框输入了一个值, 当没有使用`react-hot-loader`时, 修改代码输入框的值就不存在了, 但是使用`react-hot-loader`之后还会保留输入框的`state`
- 那还需要`react-hot-loader`的`<AppContainer>`干什么? 即使不加这个也会保留状态, 在生产环境中这个会自动禁用, 只返回子组件.`未解决`
>> 在 .babelrc 中 `["es2015", {"modules": false}]` 加上, 否则无法按照这种方法实现热加载 
	
> 4. 每个页面打包一个`bundle.js`文件是否会太占用资源?

> 5. 压缩问题, 图片, js, less


## 部署发布
> 1. 应将`react`开发版本切换成生产版本 **[react性能优化](https://discountry.github.io/react/docs/optimizing-performance.html#webpack)

## 发现
> 1. express 找不到某个静态资源时会请求两次
> 2. 先安装了某些依赖`--save`再`npm init`依赖会被写入到`package.json`中



