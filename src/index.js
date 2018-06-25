import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './_reducers';

import 'bootstrap/scss/bootstrap.scss';
import 'material-icons/iconfont/material-icons.scss';

import style from './styles/app.scss';

import App from './App';

if (module.hot) {
	module.hot.accept();
}

const rootElement = document.getElementById('app');
const store = createStore(rootReducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<App />
	</Provider>,
rootElement);