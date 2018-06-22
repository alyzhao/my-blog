import fontAwesome from 'font-awesome-webpack';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import './style.less';
import '../public/style/public.css';

import { Header, Footer } from './components.js';

const render = function() {
  ReactDOM.render(
    <AppContainer>
      <Header />
    </AppContainer>,
    document.getElementById('header')
  )
  ReactDOM.render(
    <AppContainer>
      <Footer />
    </AppContainer>,
    document.getElementById('footer')
  )
};

render();

if(module.hot) {
  module.hot.accept('./components', () => {
    render();
    // render(Footer, 'footer');
  });
}
