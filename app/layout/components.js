import React from 'react';

// 网站logo
function Logo(props) {
	return (
		<a href="/" className="logo">
			<i></i>	
			<span className="site-title">AllenZhao</span>
		</a>
	);
}

// pc端的导航
function Navbar(props) {
	return (
		<nav className="main-nav">
			<a href="/">首页</a>
			<a href="/archives/">归档</a>
			<a href="/about/">关于</a>
		</nav>
	);
}
// pc端的搜索框
class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { keywords: '' };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('submit');
	}

	handleChange(event) {
		this.setState({ keywords: event.target.value });
	}

	render() {
		return (
			<div className="search-form">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.keywords} onChange={this.handleChange} placeholder="搜索" />
					<button type="submit" className="fa fa-search"></button>
				</form>
			</div>
		);
	}
}

// 移动端搜索
class MobileNavGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onSearch: false,
			onNavopen: false
		}
		
		this.searchClick = this.searchClick.bind(this);
		this.navbarClick = this.navbarClick.bind(this);		
	}

	searchClick() {

	}

	navbarClick() {

	}

	render() {
		return (
			<div className="mb-navgroup">
				<i className="mb-search fa fa-search" onClick={this.searchClick}></i>
				<i className="mb-bar fa fa-bars" onClick={this.navbarClick}></i>
				<MobileSearch />
			</div>
		);
	}
}
class MobileSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { keywrds: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		console.log('mb search');
	}

	handleChange(event) {
		this.setState({ keywords: event.target.value });
	}

	render() {
		return (
			<div className="mb-search-main">
				<div className="top">
					<form onSubmit={this.handleSubmit}>
						<input type="text" value={this.state.keywords} onChange={this.handleChange} placeholder="搜索" />
						<button type="submit" className="fa fa-search"></button>
					</form>
				</div>
			</div>
		);
	}
}




// header组件
class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header">
				<div className="header-main clearfix">
					<Logo />
					<Navbar />
					<SearchForm />
					<MobileNavGroup />
				</div>
			</div>
		);
	}
}

export { Header };
