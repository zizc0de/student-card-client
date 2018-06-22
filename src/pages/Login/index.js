import React, { Component } from 'react';

import './_style.scss';

class Login extends Component {

	onSubmit = (event) => {
		this.props.history.push('/dashboard');
	}

	render() {
		return (
			<div>
				Login
			</div>
		);
	}
}

export default Login;