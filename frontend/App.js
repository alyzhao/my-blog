import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header, Footer } from 'components/layout/index';

import { headerNavLink } from 'constants';

import routes from './routes'

console.log('routes', routes)

const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )} />
)

const App = () => (
  <Router>
    <div>
      <Header links={headerNavLink}/>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      <Footer />
    </div>
  </Router>
)

export default App