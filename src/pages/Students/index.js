import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MainLayout as Layout } from 'containers';

class Students extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Student List</h5>
								<p className="box-head__subtitle">Manage your student list</p>
								<div className="box-head__outbox">
									<Link to="/students/add" class="btn btn-light"><i className="material-icons">add</i> Add new student</Link>
								</div>
							</div>
							<div className="box-body">
								<div className="table-responsive">
									<table className="table">
										<thead className="table-light">
											<tr>
										      <th scope="col">Name</th>
										      <th scope="col" className="text-center">Age</th>
										      <th scope="col">School</th>
										      <th scope="col">Degree</th>
										      <th scope="col">Field of study</th>
										      <th scope="col"></th>
											</tr>
										</thead>
										<tbody>
										    <tr>
										      <td>Muhammad Abdul Aziz</td>
										      <td className="text-center">21</td>
										      <td>STMIK Bani Saleh</td>
										      <td>S.SI</td>
										      <td>Sistem Informasi</td>
										      <td className="text-center">
										      	<i className="material-icons">more_horiz</i>
										      </td>									      
										    </tr>
										    <tr>
										      <td>Muhammad Abdul Aziz</td>
										      <td className="text-center">21</td>
										      <td>STMIK Bani Saleh</td>
										      <td>S.SI</td>
										      <td>Sistem Informasi</td>
										      <td className="text-center">
										      	<i className="material-icons">more_horiz</i>
										      </td>									      
										    </tr>
										    <tr>
										      <td>Muhammad Abdul Aziz</td>
										      <td className="text-center">21</td>
										      <td>STMIK Bani Saleh</td>
										      <td>S.SI</td>
										      <td>Sistem Informasi</td>
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

export default Students;