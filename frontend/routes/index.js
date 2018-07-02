import Home from 'containers/Home'
import Article from 'containers/Article'

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/articles/:id',
  component: Article
}]

export default routes