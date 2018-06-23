import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StudentCard from 'components/StudentCard';

import './_style.scss';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students: [
				{
					id: '1',
					name: 'Muhammad Abdul Aziz',
					age: '19',
					bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
				},
				{
					id: '2',
					name: 'Roro Kumala',
					age: '20',
					bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				},
				{
					id: '3',
					name: 'Hasta Ragil',
					age: '21',
					bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
				}							
			]
		}
	};

	render() {
		const { students } = this.state;

		return (
			<div className="wrapper">
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