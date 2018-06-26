import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from '../../_helpers';

import Sidebar from './Sidebar';

import './_styles.scss';

class Main extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showMenu: true,
			toggleClass: 'd-block'
		};

		const { loggedIn } = this.props;
		if (!loggedIn) {
			history.push('/login');
		}
	}

	toggleMenu = () => {
		this.state.showMenu = !this.state.showMenu;
		if (this.state.showMenu) {
			this.setState({
				toggleClass: 'd-block'
			})
		}else{
			this.setState({
				toggleClass: 'd-none'
			})
		}
	}

	render() {
		const sidebarClass = this.state.toggleClass;
		const { loggedIn } = this.props;

		return (
			<div className="container-fluid" style={{ backgroundColor: '#f3f5f7', minHeight: '100vh' }}>
				<div className="row app">
					<div className={`col-lg-2 app-sidebar ` + sidebarClass}>
						<Sidebar />
					</div>
					<div className="col-lg-10 ml-lg-auto">
						<div className="nav-wrapper d-flex d-lg-none">
							<div className="row">
								<div className="col-12">
									<i className="material-icons" style={{ cursor: 'pointer', marginLeft: this.state.showMenu ? 250 : 0 }} onClick={this.toggleMenu}>dehaze</i>
								</div>
							</div>
						</div>
						<div className="content-wrapper">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { loggedIn } = state.authentication;
	return {
		loggedIn
	};
}

export default connect(mapStateToProps)(Main);