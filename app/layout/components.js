import React from 'react';

function Logo(props) {
	return (
		<a href="/" className="logo">
			<i></i>	
			<span className="site-title">AllenZhao</span>
		</a>
	);
}

function Navbar(props) {
	return (
		<nav className="main-nav">
			<a href="/">首页</a>
			<a href="/archives/">归档</a>
			<a href="/about/">关于</a>
		</nav>
	);
}

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
				</div>
			</div>
		);
	}
}

export { Header };
