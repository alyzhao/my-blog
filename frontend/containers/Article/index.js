import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import Tag from 'components/tag'
import 'highlight.js/styles/atelier-estuary-light.css'

class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: '文章标题测试',
        tags: ['JavaScript', 'React', 'Vue', 'Node'],
        content: `<h2 id="test">test</h2>
<p>这是个测试 markdown</p>
<h2 id="code">code</h2>
<p>这也是一个测试 <code>code</code></p>
<ol>
<li><p>有序列表</p>
<ul>
<li>无需列表</li>
</ul>
</li>
<li><p>有序列表</p>
<ul>
<li>无需列表</li>
</ul>
</li>
<li><p>有序列表</p>
<ul>
<li>无需列表</li>
</ul>
</li>
<li><p>有序列表</p>
<ul>
<li>无需列表</li>
</ul>
</li>
</ol>
<blockquote>
<p>use react to build blog</p>
</blockquote>
<pre><code class="hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> a = <span class="hljs-string">'test'</span>
  <span class="hljs-keyword">return</span> a.substring(<span class="hljs-number">0</span>, <span class="hljs-number">3</span>)
}</code></pre>`
      }
    }
  }

  render() {
    const articleTags = this.state.article.tags.map((tagName, index) => <Tag key={index} tagName={tagName} />)

    return (
      <div className="container z-article-wrap clearfix">
        <article className="z-article">
          <header>
            <h1>{this.state.article.title}</h1>
            <div className="describe">
              <span className="time"><i className="fa fa-calendar"></i>2018-12-25</span>
              {articleTags}
            </div>
          </header>
          <div className="article-content" dangerouslySetInnerHTML={{__html: this.state.article.content}}></div>
        </article>
      </div>
    );
  }
}

export default ArticleComponent