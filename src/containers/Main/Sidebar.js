import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout = (event) => {
		event.preventDefault();

		const { dispatch } = this.props;
		dispatch(userActions.logout);
	}

	render() {
		const { pathname } = this.props.location;

		return (
			<div>
				<h5 className="app-sidebar__brand">Student App</h5>
				<h5 className="app-sidebar__title">Main</h5>
				<ul className="app-sidebar__menu">
					<li className={pathname == '/dashboard' ? 'active' : ''}>
						<Link to="/dashboard"><i className="material-icons">dashboard</i> Dashboard</Link>
					</li>									
					<li className={pathname == '/students' ? 'active' : ''}>
						<Link to="/students"><i className="material-icons">people</i> Student List</Link>
					</li>									
				</ul>
				<div className="line-break"></div>
				<h5 className="app-sidebar__title">Settings</h5>
				<ul className="app-sidebar__menu">
					<li className={pathname == '/users' ? 'active' : ''}>
						<Link to="/users"><i className="material-icons">person_add</i> Admin</Link>
					</li>									
				</ul>
				<div style={{ position: 'absolute', bottom: 50, width: '100%' }}>
					<h5 className="app-sidebar__title">Account</h5>
					<ul className="app-sidebar__menu">
						<li>
							<Link to="/"><i className="material-icons">face</i> Profile</Link>
						</li>					
						<li>
							<Link to="/" onClick={this.logout}><i className="material-icons">power_settings_new</i> Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect()(withRouter(Sidebar));