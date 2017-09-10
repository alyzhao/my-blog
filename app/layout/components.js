import React from 'react';

function Logo(props) {
	return (
		<a href="/" className="logo">
			<i></i>	
			<span className="site-title">AllenZhao</span>
		</a>
	);
}

function Menu(props) {
	return (
		<nav className="main-nav">
			<a href="/">首页</a>
			<a href="/archives/">归档</a>
			<a href="/about/">关于</a>
		</nav>
	);
}

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header">
				<div className="header-main">
					<Logo />
					<Menu />
				</div>
			</div>
		);
	}
}

export { Header };
