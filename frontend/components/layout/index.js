import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

import './style.less';

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

  const navLinks = props.links.map(item => <Link to={item.link} key={item.link}>{item.name}</Link>)

  return (
    <nav className="main-nav">
      {navLinks}
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
          {
            this.props.links.map(item => (
              <li key={item.link}>
                <i className={'fa ' + item.icon}></i>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))
          }
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
          <Navbar links={this.props.links}/>
          <SearchForm />
          <MobileNavGroup onMbNavbar={this.state.onMbNavbar} toggleMbSearch={this.toggleMbSearch} toggleMbNavbar={this.toggleMbNavbar} />
          { this.state.onMbSearch ? <MobileSearch toggleMbSearch={this.toggleMbSearch} /> : ''}
          <CSSTransitionGroup transitionName="mbnavbar" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            { this.state.onMbNavbar ? <MobileNavbar toggleMbNavbar={this.toggleMbNavbar} links={this.props.links} /> : ''}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

// footer 组件
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="con">
          <div className="social">
            <a href="https://github.com/alyzhao" target="_blank"><i className="fa fa-github"></i></a>
            <a href="" target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="" target="_blank"><i className="fa fa-weibo"></i></a>
            <a href="" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="" target="_blank"><i className="fa fa-behance"></i></a>
          </div>
          <p className="copyright">Copyright © 2018 Allen Zhao.</p>
        </div>
      </div>
    );
  }
}

export { Header, Footer };