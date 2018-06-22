import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import routes from './routes';

class App extends Component {
	render() {
		return (
			<Router>
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