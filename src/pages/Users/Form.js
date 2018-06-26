import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { history } from '_helpers';
import API from 'api';

import { MainLayout as Layout } from 'containers';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scope: {
				username: '',
				fullname: '',
				password: '',
				role: 'Admin'
			},
			errors: {},
			mode: 'create'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		let scope = {...this.state.scope};
		scope[name] = value;
		this.setState({scope});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		API.post('users', this.state.scope, {
			headers: {
				Authorization: 'Bearer '+localStorage.getItem('student_token')
			}			
		})
		.then((response) => {
			let result = response.data;
			if (typeof result.success !== "undefined" && result.success) {
				Swal({
					title: "Success",
					text: result.message,
					type: "success",
					showConfirmButton: true
				}).then((result) => {
					if (result) {
						history.push('/users');
					}
				});				
			}
		})
		.catch((err) => {
			let status = err.response.status;
			if (status == 422) {
				let errors = err.response.data.errors
				if (typeof errors !== "undefined") {
					let obj = new Object();
					errors.map((error) => {
						obj[error.param] = {
							message: error.msg
						}
					});
					console.log(obj);					
					this.setState({
						errors: obj
					});
				}
			}else{
				Swal('Oops', 'Error!', 'error');
			}			
		})
	}

	render() {
		const { username, fullname, password, role } = this.state.scope;
		const { errors, mode } = this.state;

		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Add User</h5>
							</div>
							<div className="box-body">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label>Fullname</label>
										<input
										type="text"
										name="fullname"
										className="form-control"
										value={fullname}
										onChange={this.handleChange}
										/>
										{errors.fullname && !fullname && <p className="text-danger">{errors.fullname.message}</p>}
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Username</label>
												<input
												type="text"
												name="username"
												className="form-control"
												value={username}
												onChange={this.handleChange}
												/>
												{errors.username && <p className="text-danger">{errors.username.message}</p>}
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Password</label>
												<input
												type="password"
												name="password"
												className="form-control"
												value={password}
												onChange={this.handleChange}
												/>
												{errors.password && !password && <p className="text-danger">{errors.password.message}</p>}
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Role</label>
										<select name="role" className="form-control" value={role} onChange={this.handleChange}>
											<option value="Developer">Developer</option>
											<option value="Superadmin">Superadmin</option>
											<option value="Admin">Admin</option>
										</select>
									</div>
									<div className="form-group mt-5 mb-0 text-right">
										<button type="submit" class="btn btn-base mr-2">Save</button>
										<Link to="/users" className="btn btn-secondary">Cancel</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default UserForm;