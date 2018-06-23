import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainLayout as Layout } from 'containers';

class UserForm extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Add User</h5>
							</div>
							<div className="box-body">
								<form>
									<div className="form-group">
										<label>Fullname</label>
										<input type="text" className="form-control" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Username</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Password</label>
												<input type="password" className="form-control" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Role</label>
										<select className="form-control">
											<option>Developer</option>
											<option>Superadmin</option>
											<option>Admin</option>
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