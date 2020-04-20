import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import { AppContainer } from 'react-hot-loader';

import 'font-awesome/css/font-awesome.css';

import 'normalize.css';

import App from './App';

// import './style.less';

const render = function(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

if(module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
