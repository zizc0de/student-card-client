import React, { Component } from 'react';

import Sidebar from './Sidebar';
import './_styles.scss';

class Main extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row app">
					<div className="col-lg-2 app-sidebar">
						<Sidebar />
					</div>
					<div className="col-lg-10">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Main;