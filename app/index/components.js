import React from 'react';
import Banner from './banner.jpg';
import { CSSTransitionGroup } from 'react-transition-group';

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

//单个文章组件, 当然 fetch 改变状态啊！
class Article extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="article-cell">
				{ this.props.articleImgUrl ? <div className="article-imgwrap"><img src={this.props.articleImgUrl} /></div> : ''}
				<div className="article-con">
					<h1 className="title"><a href={'/article/' + this.props.articleId} target="_blank">{this.props.articleTitle}</a></h1>
					<div className="tags-con">
						<span>
							<i className="fa fa-calendar"></i>
							<a>{this.props.articleDate}</a>
						</span>
						<span>
							<i className="fa fa-folder"></i>
							<a href={'/category/' + this.props.articleTagId} className="catename" target="_blank">{this.props.articleTag}</a>
						</span>
					</div>
					<p className="article-des">
						{this.props.articleDescription}
					</p>
					<div className="know-more"><a href={'/article/' + this.props.articleId} target="_blank">阅读更多</a></div>
					<div className="opera">
						<a href={'/article/' + this.props.articleId + '/#comment'} target="_blank"><i className="fa fa-comment"></i>评论</a>
						<a><i className="fa fa-share"></i>分享</a>
					</div>
				</div>
			</div>
		);
	}
}

function RecentArticleItem(props) {
	return (
		<li className="normal">
			<span>{props.index}</span>
			<p className="article-title"><a href={'/article/' + props.articleId} target="_blank">{props.articleTitle}</a></p>
		</li>
	)
}

// 近期文章组件
class RecentArticle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.recentArticleList);
		const recentArticleList = this.props.recentArticleList.map((article, index) => 
			<RecentArticleItem index={index + 1} key={article.articleId} articleId={article.articleId} articleTitle={article.articleTitle} />
		)
		console.log(recentArticleList);
		return (
			<div className="left-cell">
				<p className="title">近期文章</p>
				<div className="con">
					<ul className="recent-list">
						{recentArticleList}
					</ul>
				</div>
			</div>
		);
	}
}

function CategoryArticle(props) {
	const cateArticleList = props.recentArticles.map(article => 
		<li key={article.articleId}>
			<a href={'/article/' + article.articleId} target="_blank">{article.articleTitle}</a>
		</li>
	)
	return (
		<ul>
			{cateArticleList}
		</ul>
	);
}

// 分类项
class CategoryItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideDown: true
		}
	}

	render() {
		const category = this.props.categoryItem;
		return (
			<div className="category-cell">
				<div className="cat-title">
					<i className={'cate ' + category.iconClassName}></i>
					<span>{category.categoryName}</span>
					<i className={'arrow fa fa-angle-down' + (this.state.slideDown ? ' active' : '')}></i>
				</div>
				<CSSTransitionGroup transitionName="cate-article" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					<CategoryArticle recentArticles={category.recentArticles} />
				</CSSTransitionGroup>
			</div>
		);
	}
}

// 分类
class Category extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const categoryList = this.props.categoryList.map(category => 
			<CategoryItem key={category.categoryId} categoryItem={category} />
		)

		return (
			<div className="left-cell">
				<p className="title">分类</p>
				<div className="con">
					{categoryList}
				</div>
			</div>
		);
	}
}

// 首页的内容
class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articleList: [
				{
					articleId: 1,
					articleTitle: '文章标题测试',
					articleImgUrl: '/images/ArticlePic/music.jpg',
					articleDate: '2015-02-03',
					articleTag: '分类测试',
					articleTagId: '0',
					articleDescription: 'Redux 是一个改变状态(state)的模型，这个模型通过一个单向操作的方式来改变状态。现在网上教程一言不合上来就是 Redux + React 的综合运用，经常搞的人一脸懵逼。其实 Redux 和 React 完全解耦，并不是 Redux 非得和 React结合才能使用，而只是 React 结合 Redux 会事半功倍。本系列主要也讲得这个。'
				}, 
				{
					articleId: 2,
					articleTitle: '文章标题测试',
					articleImgUrl: '/images/ArticlePic/music.jpg',
					articleDate: '2015-02-03',
					articleTag: '分类测试',
					articleTagId: '0',
					articleDescription: 'Redux 是一个改变状态(state)的模型，这个模型通过一个单向操作的方式来改变状态。现在网上教程一言不合上来就是 Redux + React 的综合运用，经常搞的人一脸懵逼。其实 Redux 和 React 完全解耦，并不是 Redux 非得和 React结合才能使用，而只是 React 结合 Redux 会事半功倍。本系列主要也讲得这个。'
				},
				{
					articleId: 3,
					articleTitle: '文章标题测试',
					articleImgUrl: '/images/ArticlePic/music.jpg',
					articleDate: '2015-02-03',
					articleTag: '分类测试',
					articleTagId: '0',
					articleDescription: 'Redux 是一个改变状态(state)的模型，这个模型通过一个单向操作的方式来改变状态。现在网上教程一言不合上来就是 Redux + React 的综合运用，经常搞的人一脸懵逼。其实 Redux 和 React 完全解耦，并不是 Redux 非得和 React结合才能使用，而只是 React 结合 Redux 会事半功倍。本系列主要也讲得这个。'
				}
			],
			recentArticleList: [
				{
					articleId: 1,
					articleTitle: '文章标题测试'					
				},
				{
					articleId: 2,
					articleTitle: '文章标题测试'										
				},
				{
					articleId: 3,
					articleTitle: '文章标题测试'										
				},
				{
					articleId: 4,
					articleTitle: '文章标题测试'										
				},
				{
					articleId: 5,
					articleTitle: '文章标题测试'										
				}
			],
			category: [
				{
					categoryId: 1,
					categoryName: '生活感想',
					iconClassName: 'fa fa-rocket',
					recentArticles: [
						{
							articleId: 1,
							articleTitle: '文章标题测试1'
						},
						{
							articleId: 2,
							articleTitle: '文章标题测试2'
						},
						{
							articleId: 3,
							articleTitle: '文章标题测试2'
						}
					],
					isAll: false
				},
				{
					categoryId: 2,
					categoryName: '前端实验室',
					iconClassName: 'fa fa-gamepad',
					recentArticles: [
						{
							articleId: 1,
							articleTitle: '文章标题测试1'
						},
						{
							articleId: 2,
							articleTitle: '文章标题测试2'
						},
						{
							articleId: 3,
							articleTitle: '文章标题测试2'
						}
					],
					isAll: true
				}
			]
		}
	}

	render() {
		const articleList = this.state.articleList.map( article => 
			<Article 
			key={article.articleId}
			articleId={article.articleId}
			articleTitle={article.articleTitle}
			articleImgUrl={article.articleImgUrl} 
			articleDate={article.articleDate}
			articleTag={article.articleTag}
			articleTagId={article.articleTagId}
			articleDescription={article.articleDescription} />
		);

		return (
			<div>
				<TopIntro />
				<div className="container clearfix">
					<div className="left">
						{articleList}
					</div>
					<div className="right">
						<RecentArticle recentArticleList={this.state.recentArticleList} />
						<Category categoryList={this.state.category} />
					</div>
				</div>
			</div>
		);
	}
}

export { IndexComponent }; 