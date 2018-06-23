import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainLayout as Layout } from 'containers';

class Users extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">User List</h5>
								<p className="box-head__subtitle">Manage your user list</p>
								<div className="box-head__outbox">
									<Link to="/users/add" class="btn btn-light"><i className="material-icons">add</i> Add new user</Link>
								</div>
							</div>
							<div className="box-body">
								<div className="table-responsive">
									<table className="table">
										<thead className="table-light">
											<tr>
										      <th scope="col">Username</th>
										      <th scope="col">Name</th>
										      <th scope="col">Role</th>
										      <th scope="col">Last Login</th>
										      <th scope="col"></th>
											</tr>
										</thead>
										<tbody>
										    <tr>
										      <td>zizcode</td>
										      <td>Muhammad Abdul Aziz</td>
										      <td>Developer</td>
										      <td>23/06/2018 22:00</td>
										      <td className="text-center">
										      	<i className="material-icons">more_horiz</i>
										      </td>									      
										    </tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Users;