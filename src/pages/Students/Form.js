import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainLayout as Layout } from 'containers';

class StudentForm extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Add Student</h5>
							</div>
							<div className="box-body">
								<form>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>First Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Last Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4">
											<div className="form-group">
												<label>School</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Degree</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Field of Study</label>
												<input type="text" className="form-control" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Bio</label>
										<textarea className="form-control" rows="4" style={{ resize: 'none' }}></textarea>
									</div>
									<div className="form-group mt-5 mb-0 text-right">
										<button type="submit" class="btn btn-base mr-2">Save</button>
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