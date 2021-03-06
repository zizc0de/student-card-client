import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentCard extends Component {
	render() {
		const { detail } = this.props;

		return (
			<div className="student-card">
				<div className="student-card-body">
					<div className="row">
						<div className="col-12">
							<div className="student-card__pict">
								<img src={require('assets/images/user.png')} />
							</div>
							<div className="student-card__detail">
								<p className="mb-0 text-semi-bold">{detail.firstname+" "+detail.lastname}</p>
								<small>{detail.age} years old</small>
							</div>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-12">
							<div className="student-card__desc">
								<p className="mb-0">{detail.bio}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="student-card-footer">
					<Link to={`/student/${detail.id}`}>Detail</Link>
				</div>
			</div>
		);
	}
}

export default StudentCard;