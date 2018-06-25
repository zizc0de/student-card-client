import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from 'api';

import StudentCard from 'components/StudentCard';

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			students: []
		}
	};

	componentDidMount() {
		API.get('students')
		.then((result) => {
			let data = result.data;
			this.setState({
				students: data.students
			});
		})
	}

	render() {
		const { students } = this.state;

		return (
			<div className="bg-gradient">
				<div className="container">
					<div className="row">
						<StudentList lists={students} />
					</div>
				</div>
			</div>
		);
	}
}

const StudentList = ({ lists }) =>
	<div style={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', flexFlow: 'wrap' }} className="mt-3 mt-lg-0">
		{lists.map((student) =>
			<div key={student.id} className="col-lg-4 col-md-6 mb-3 mb-lg-0">
				<StudentCard detail={student} />
			</div>
		)}
	</div>

export default Home;