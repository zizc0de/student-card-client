import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/scss/bootstrap.scss';
import 'material-icons/iconfont/material-icons.scss';

import style from './styles/app.scss';

import App from './App';

if (module.hot) {
	module.hot.accept();
}

const rootElement = document.getElementById('app');

render(<App />, rootElement);