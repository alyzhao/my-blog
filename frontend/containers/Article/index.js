import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import Tag from 'components/tag'

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: '文章标题测试'
      }
    }
  }

  render() {
    return (
      <div className="container z-article-wrap clearfix">
        <article className="z-article">
          <header>
            <h1>{this.state.article.title}</h1>
            <div className="describe">
              <span className="time"><i className="fa fa-calendar"></i>2018-12-25</span>
              <Tag tagName="JavaScript" />
            </div>
          </header>
        </article>
      </div>
    );
  }
}

export default ArticleComponent