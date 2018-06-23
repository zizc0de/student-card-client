import React, { Component } from 'react';

import './_style.scss';

class Login extends Component {

	onSubmit = (event) => {
		this.props.history.push('/dashboard');
	}

	render() {
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

								<div className="row">
									<div className="col-12">
										<form onSubmit={this.onSubmit}>
											<div className="form-group">
												<label>Username</label>
												<input type="text" className="form-control" />
											</div>
											<div className="form-group">
												<label>Password</label>
												<input type="password" className="form-control" />
											</div>
											<div className="form-group mt-4">
												<button type="submit" class="btn btn-base">Login</button>
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

export default Login;