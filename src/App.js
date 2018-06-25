import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import { history } from './_helpers';

import routes from './routes';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<div>
						<Helmet>
							<link rel="icon" href={require('assets/images/favicons/favicon.ico')} />
						</Helmet>
						{renderRoutes(routes)}
					</div>
				</Switch>
			</Router>
			)
	}
};

export default App;