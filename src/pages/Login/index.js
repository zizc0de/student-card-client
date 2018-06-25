import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions, alertActions } from '../../_actions';

import './_style.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			submitted: false
		};
		const { dispatch } = this.props;
		dispatch(alertActions.clear());
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
			this.setState({ submitted: false });
		}
	}

	render() {
		const { username, password, submitted } = this.state;
		const isInvalid = username === '' || password === '' || submitted;
		const { alert } = this.props;

		return (
			<div style={{ height: '100vh' }}>
				<div className="container">
					<div className="row">
						<div className="col-md-5 d-none d-md-flex auth-container">
							<div className="auth-content">
								<img src={require('assets/images/education.jpg')} className="img-fluid" />
							</div>
						</div>
						<div className="col-md-5 mr-auto auth-container">
							<div className="auth-content">

								<div className="row mb-2">
									<div className="col-12">
										<h4 className="text-semi-bold">Sign in to Dashboard</h4>
										<hr className="primary" style={{ width: 47 }} />
									</div>
								</div>

								{alert.message &&
									<div className="row">
										<div className="col-12">
											<div className={`alert ${alert.type}`}>
												{alert.message}
											</div>
										</div>
									</div>
								}

								<div className="row">
									<div className="col-12">
										<form onSubmit={this.handleSubmit}>
											<div className="form-group">
												<label>Username</label>
												<input
												type="text"
												name="username"
												className="form-control"
												autoComplete="off"
												value={username}
												onChange={this.handleChange}
												/>
											</div>
											<div className="form-group">
												<label>Password</label>
												<input
												type="password"
												name="password"
												className="form-control"
												value={password}
												onChange={this.handleChange}
												/>
											</div>
											<div className="form-group mt-4">
												<button type="submit" className="btn btn-base" disabled={isInvalid}>
													{submitted ? 'Loading..' : 'Login'}
												</button>
											</div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	const { alert } = state;
	return {
		loggingIn,
		alert
	};
}

export default connect(mapStateToProps)(Login);