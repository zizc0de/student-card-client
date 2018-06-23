import React, { Component } from 'react';

import Sidebar from './Sidebar';
import './_styles.scss';

class Main extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ backgroundColor: '#f3f5f7', minHeight: '100vh' }}>
				<div className="row app">
					<div className="sidebar-wrapper">
						<div className="col-lg-2 app-sidebar">
							<Sidebar />
						</div>
					</div>
					<div className="col-lg-10 ml-lg-auto">
						<div className="content-wrapper">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;