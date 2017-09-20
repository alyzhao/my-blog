import React from 'react';

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
			<div className="container clearfix">
				<div className="left">
					
				</div>
				<div className="right">
					
				</div>
			</div>
		);
	}
}

export { IndexComponent }; 