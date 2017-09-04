import React from 'react';
class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'CaptainZhao'
			},
			value: 'test'
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(event) {
		this.setState(prevState => ({
			value: event.value
		}));
	}	

	handleClick(event) {
		event.stopPropagation();
		event.preventDefault();
		this.setState(prevState => ({
			user: {
				name: prevState.user.name == 'CaptainZhao' ? 'CaptainSmart' : 'CaptainZhao'
			}
		}))
	}

	render() {
		return (
			<div>
				<h1>welcome, {this.state.user.test}<span className="username">{this.state.user.name}({this.props.userage})</span><a href="http://www.baidu.com" onClick={this.handleClick}>切换</a></h1>
				<input onChange={this.handleChange} value={this.state.value} placeholder="input some words" />
			</div>
		);
	}
}

export { IndexComponent };