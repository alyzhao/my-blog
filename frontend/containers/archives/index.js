import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Timeline extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="timeline">
        <h3 className="timeline-year">{this.props.year}</h3>
        <div className="timeline-articles">
          <article className="media">
            <a className="article-img"><img src="/images/ArticlePic/music.jpg" /></a>
          </article>
        </div>
      </div>
    )
  }
}

class ArchivesComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      archivesList: [{
        year: '2018',
        archives: [{
          articleImgUrl: '/images/ArticlePic/music.jpg',
          articleTitle: '文章标题测试',
          articleDate: '2015-02-03'
        }, {
          articleImgUrl: '/images/ArticlePic/music.jpg',
          articleTitle: '文章标题测试',
          articleDate: '2015-02-03'
        }, {
          articleImgUrl: '/images/ArticlePic/music.jpg',
          articleTitle: '文章标题测试',
          articleDate: '2015-02-03'
        }, {
          articleImgUrl: '/images/ArticlePic/music.jpg',
          articleTitle: '文章标题测试',
          articleDate: '2015-02-03'
        }, {
          articleImgUrl: '/images/ArticlePic/music.jpg',
          articleTitle: '文章标题测试',
          articleDate: '2015-02-03'
        }]
      }]
    }
  }

  render() {
    const timeLineList = this.state.archivesList.map( archive =>
      <Timeline key={archive.year} year={archive.year} />
    )

    return (
      <div className="archives container">
        { timeLineList }
      </div>
    )
  }
}

export default ArchivesComponent