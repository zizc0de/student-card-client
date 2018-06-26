import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './_reducers';

import { loadState, saveState } from './_helpers';
// import throttle from 'lodash/throttle';

import 'bootstrap/scss/bootstrap.scss';
import 'material-icons/iconfont/material-icons.scss';

import style from './styles/app.scss';

import App from './App';

if (module.hot) {
	module.hot.accept();
}

const persistedState = loadState();

// const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// store.subscribe(throttle(() => {
// 	saveState(store.getState());
// }, 1000));

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

const rootElement = document.getElementById('app');

render(
	<Provider store={store}>
		<App />
	</Provider>,
rootElement);