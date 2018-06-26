import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { history } from '_helpers';

import API from 'api';

import { MainLayout as Layout } from 'containers';

class StudentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scope: {
				firstname: '',
				lastname: '',
				place_of_birth: '',
				date_of_birth: '',
				school: '',
				degree: '',
				field_of_study: '',
				bio: ''
			},
			errors: {},
			submitted: false
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

		API.post('students', this.state.scope, {
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
						history.push('/students');
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
		const { firstname, lastname, place_of_birth, date_of_birth, school, degree, field_of_study, bio } = this.state.scope;
		const { errors } = this.state;

		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Add Student</h5>
							</div>
							<div className="box-body">
								<form onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>First Name</label>
												<input
												type="text"
												name="firstname"
												className="form-control"
												value={firstname}
												onChange={this.handleChange}
												/>
												{errors.firstname && !firstname && <p className="text-danger">{errors.firstname.message}</p>}
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Last Name</label>
												<input
												type="text"
												name="lastname"
												className="form-control"
												value={lastname}
												onChange={this.handleChange}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Place of Birth</label>
												<input
												type="text"
												name="place_of_birth"
												className="form-control"
												value={place_of_birth}
												onChange={this.handleChange}
												/>
												{errors.place_of_birth && !place_of_birth && <p className="text-danger">{errors.place_of_birth.message}</p>}
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Date of Birth</label>
												<input
												type="text"
												name="date_of_birth"
												className="form-control"
												value={date_of_birth}
												onChange={this.handleChange}
												/>
												{errors.date_of_birth && !date_of_birth && <p className="text-danger">{errors.date_of_birth.message}</p>}
											</div>
										</div>
									</div>									
									<div className="row">
										<div className="col-md-4">
											<div className="form-group">
												<label>School</label>
												<input
												type="text"
												name="school"
												className="form-control"
												value={school}
												onChange={this.handleChange}
												/>
												{errors.school && !school && <p className="text-danger">{errors.school.message}</p>}
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Degree</label>
												<input
												type="text"
												name="degree"
												className="form-control"
												value={degree}
												onChange={this.handleChange}
												/>
												{errors.degree && !degree && <p className="text-danger">{errors.degree.message}</p>}
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Field of Study</label>
												<input
												type="text"
												name="field_of_study"
												className="form-control"
												value={field_of_study}
												onChange={this.handleChange}
												/>
												{errors.field_of_study && !field_of_study && <p className="text-danger">{errors.field_of_study.message}</p>}
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Bio</label>
										<textarea
										name="bio"
										value={bio}
										onChange={this.handleChange}
										className="form-control"
										rows="4"
										style={{ resize: 'none' }}
										>
										</textarea>
									</div>
									<div className="form-group mt-5 mb-0 text-right">
										<button type="submit" className="btn btn-base mr-2">Save</button>
										<Link to="/students" className="btn btn-secondary">Cancel</Link>
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

export default StudentForm;