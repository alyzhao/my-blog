import Home from 'containers/Home'
import Article from 'containers/Article'
import Archives from 'containers/Archives'

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/articles/:id',
  component: Article
}, {
  path: '/archives',
  component: Archives
}]

export default routes