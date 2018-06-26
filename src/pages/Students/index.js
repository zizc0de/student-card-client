import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Swal from 'sweetalert2';

import { MainLayout as Layout } from 'containers';

import API from 'api';

class Students extends Component {
	constructor(props) {
		super(props)

		this.state = {
			students: []
		}

		this.handleDelete = this.handleDelete.bind(this);
		this.removeItem = this.removeItem.bind(this);
	};

	componentDidMount() {
		this.fetchItem();
	}

	fetchItem = () => {
		API.get('students')
		.then((result) => {
			let data = result.data;
			this.setState({
				students: data.students
			});
		});		
	}

	removeItem = (id) => {
		API.delete(`students/${id}`, {
			headers: {
				Authorization: 'Bearer '+localStorage.getItem('student_token')
			}			
		})
		.then((response) => {
			let result = response.data;
			if (typeof result.success !== "undefined" && result.success) {
				this.fetchItem();
				Swal({
					title: 'Success',
					text: result.message,
					type: 'success',
					showConfirmButton: false,
					timer: 2000
				});
			}
		})
		.catch((err) => {
			console.log(err);
			Swal('Oops', 'Error!', 'error');
		})
	}

	handleDelete = (id) => {
		Swal({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  if (result.value) {
		  	this.removeItem(id);
		  }
		});
	}

	render() {
		const { students } = this.state;

		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">Student List</h5>
								<p className="box-head__subtitle">Manage your student list</p>
								<div className="box-head__outbox">
									<Link to="/students/add" className="btn btn-light"><i className="material-icons">add</i> Add new student</Link>
								</div>
							</div>
							<div className="box-body">
								<div className="">
									<table className="table">
										<thead className="table-light">
											<tr>
										      <th scope="col" width="75">Name</th>
										      <th scope="col" width="75">School</th>
										      <th scope="col" width="75">Degree</th>
										      <th scope="col" width="75">Field of study</th>
										      <th scope="col" width="75"></th>
											</tr>
										</thead>
										<tbody>
										{students.length > 0 ?
											students.map((row) =>
											    <tr key={row.id}>
											      <td>{row.firstname+" "+row.lastname}</td>
											      <td>{row.school}</td>
											      <td>{row.degree}</td>
											      <td>{row.field_of_study}</td>
											      <td className="text-center">
											      	<UncontrolledDropdown>
											      		<DropdownToggle tag="a" className="base to-primary" style={{ cursor: 'pointer' }}>
											      			<i className="material-icons">more_horiz</i>
											      		</DropdownToggle>
											      		<DropdownMenu>
											      			<Link to={`/students/edit/${row.id}`}>
												      			<DropdownItem style={{ cursor: 'pointer' }}>Edit</DropdownItem>
												      		</Link>
											      			<DropdownItem onClick={() => this.handleDelete(row.id)} style={{ cursor: 'pointer' }}>Delete</DropdownItem>
											      		</DropdownMenu>
											      	</UncontrolledDropdown>
											      </td>									      
											    </tr>
											)
										    :
										    <tr>
										    	<td className="text-center" colSpan="6">No data available</td>
										    </tr>
										}
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