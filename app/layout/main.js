import fontAwesome from 'font-awesome-webpack';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import './style.less';
import '../public/style/public.css';

import { Header } from './components.js';

const render = function(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('header')
	)
};

render(Header);

if(module.hot) {
	module.hot.accept('./components', () => {
		render(Header);
	});
}
