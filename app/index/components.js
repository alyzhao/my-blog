import React from 'react';
import Banner from './banner.jpg';
// 头图组件
class TopIntro extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className="top-intro">
				<div className="banner-wrap">
					<img className="banner-img" src={Banner} />
					<div className="title-wrap">
						<h1>Allen's Blog</h1>
						<h2>ALLEN'S BLOG | 青春须早为 岂能长少年</h2>
					</div>
				</div>
			</div>
		);
	}
}


//单个文章组件, 当然 ajax 改变状态啊！
class Article extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="artical-cell">
				
			</div>
		);
	}
}

// 首页的内容
class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TopIntro />
				<div className="container clearfix">
					<div className="left">
						
					</div>
					<div className="right">
						
					</div>
				</div>
			</div>
		);
	}
}

export { IndexComponent }; 