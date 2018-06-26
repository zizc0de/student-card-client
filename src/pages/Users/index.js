import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const moment = require('moment');

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Swal from 'sweetalert2';

import API from 'api';

import { MainLayout as Layout } from 'containers';

class Users extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		}

		this.handleDelete = this.handleDelete.bind(this);
		this.removeItem = this.removeItem.bind(this);		
	};

	componentDidMount() {
		this.fetchItems();
	}

	convertTime = (time) => {
		var date = moment(time, moment.ISO_8601);
		if (date.isValid()) {
			return date.format("DD/MM/YYYY HH:mm");
		}else{
			return "-";
		}
	}

	fetchItems = () => {
		API.get('users', {
			headers: {
				Authorization: 'Bearer '+localStorage.getItem('student_token')				
			}
		})
		.then((result) => {
			let data = result.data;
			this.setState({
				users: data.users
			});
		});			
	}

	removeItem = (id) => {
		API.delete(`users/${id}`, {
			headers: {
				Authorization: 'Bearer '+localStorage.getItem('student_token')
			}			
		})
		.then((response) => {
			let result = response.data;
			if (typeof result.success !== "undefined" && result.success) {
				this.fetchItems();
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
		const { users } = this.state;

		return (
			<Layout>
				<div className="row">
					<div className="col-12">
						<div className="box box-shadow">
							<div className="box-head">
								<h5 className="box-head__title">User List</h5>
								<p className="box-head__subtitle">Manage your user list</p>
								<div className="box-head__outbox">
									<Link to="/users/add" className="btn btn-light"><i className="material-icons">add</i> Add new user</Link>
								</div>
							</div>
							<div className="box-body">
								<div className="">
									<table className="table">
										<thead className="table-light">
											<tr>
										      <th scope="col" width="75">Username</th>
										      <th scope="col" width="100">Name</th>
										      <th scope="col" width="75">Role</th>
										      <th scope="col" width="100">Last Login</th>
										      <th scope="col" width="75"></th>
											</tr>
										</thead>
										<tbody>
										{users.length > 0 ?
											users.map((row) =>
											    <tr key={row.id}>
											      <td>{row.username}</td>
											      <td>{row.fullname}</td>
											      <td>{row.role}</td>
											      <td>{this.convertTime(row.last_login)}</td>
											      <td className="text-center">
											      	<UncontrolledDropdown>
											      		<DropdownToggle tag="a" className="base to-primary" style={{ cursor: 'pointer' }}>
											      			<i className="material-icons">more_horiz</i>
											      		</DropdownToggle>
											      		<DropdownMenu>
											      			<Link to={`/users/edit/${row.id}`}>
												      			<DropdownItem style={{ cursor: 'pointer' }}>Edit</DropdownItem>
												      		</Link>
											      			<DropdownItem onClick={() => this.handleDelete(row.id)} style={{ cursor: 'pointer' }}>Delete</DropdownItem>
											      		</DropdownMenu>
											      	</UncontrolledDropdown>											      	
											      </td>									      
											    </tr>
											) :
										    <tr>
										    	<td className="text-center" colSpan="5">No data available</td>
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

export default Users;