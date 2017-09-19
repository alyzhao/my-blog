import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


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
	}
	render() {
		let barStyle = {};
		if (this.props.onMbNavbar) {
			barStyle.backgroundColor = '#e2e2e2';
		}
		return (
			<div className="mb-navgroup">
				<i className="mb-search fa fa-search" onClick={this.props.toggleMbSearch}></i>
				<i className="mb-bar fa fa-bars" style={barStyle} onClick={this.props.toggleMbNavbar}></i>
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
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.keywords} onChange={this.handleChange} placeholder="搜索" />
					<button type="submit" className="fa fa-search"></button>
					<button type="button" onClick={this.props.toggleMbSearch}>取消</button>
				</form>
			</div>
		);
	}
}

class MobileNavbar extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className="mb-navbar">
				<ul>
					<li><i className="fa fa-home"></i><a href="/">首页</a></li>
					<li><i className="fa fa-delicious"></i><a href="/archives/">归档</a></li>
					<li><i className="fa fa-coffee"></i><a href="/about/">关于</a></li>
				</ul>
			</div>
		);
	}

}

// header组件
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onMbSearch: false,
			onMbNavbar: false
		}

		this.toggleMbSearch = this.toggleMbSearch.bind(this);
		this.toggleMbNavbar = this.toggleMbNavbar.bind(this);
	}

	toggleMbSearch() {
		this.setState(prevState => ({
			onMbSearch: !prevState.onMbSearch,
			onMbNavbar: false
		}));
	}

	toggleMbNavbar() {
		this.setState(prevState => ({
			onMbNavbar: !prevState.onMbNavbar,
			onMbSearch: false
		}));
	}

	render() {
		return (
			<div className="header">
				<div className="header-main clearfix">
					<Logo />
					<Navbar />
					<SearchForm />
					<MobileNavGroup onMbNavbar={this.state.onMbNavbar} toggleMbSearch={this.toggleMbSearch} toggleMbNavbar={this.toggleMbNavbar} />
					{ this.state.onMbSearch ? <MobileSearch toggleMbSearch={this.toggleMbSearch} /> : ''}
					<CSSTransitionGroup transitionName="mbnavbar" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
						{ this.state.onMbNavbar ? <MobileNavbar toggleMbNavbar={this.toggleMbNavbar} /> : ''}
					</CSSTransitionGroup>
				</div>
			</div>
		);
	}
}

export { Header };