import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainLayout as Layout } from 'containers';

class Dashboard extends Component {
	render() {
		return (
			<Layout>
				ini dashboard
				<Link to="/projects">Projects</Link>
			</Layout>
		);
	}
}

export default Dashboard;