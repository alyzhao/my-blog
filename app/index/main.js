import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { IndexComponent } from './components.js';
import './style.less';
 
const render = function(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app')
	)
};

render(IndexComponent);

if(module.hot) {
	module.hot.accept('./components', () => {
		render(IndexComponent);
	});
}
