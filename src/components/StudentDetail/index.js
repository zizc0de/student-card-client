import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import nl2br from 'react-nl2br';

import API from 'api';

class StudentDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: {}
		}
	}

	componentDidMount() {
		const { match: { params }, history } = this.props;

		API.get(`students/${params.id}`)
		.then((result) => {
			let data = result.data;
			this.setState({
				detail: data.student
			});
		})
		.catch(err => {
			window.location.href = '/';
		})
	}

	render() {
		const { detail } = this.state;

		return (
			<div className="bg-gradient">
				<div className="wrapper-backdrop">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 ml-auto mr-auto">
								<div className="wrapper--full-height" style={{ paddingTop: 80}}>
									<div style={{ flex: 1 }} className="student-card">
										
										<div className="student-card-header">
											<Link to="/" className="base to-primary">
												<i className="material-icons">arrow_back</i> Back
											</Link>
										</div>

										<div className="student-card-body">
											<div className="row mb-5">
												<div className="col-md-8">
													<h3 className="text-semi-bold mb-0">{detail.firstname+" "+detail.lastname}</h3>
													<p>{detail.age} years old</p>
													<h5 className="text-semi-bold mb-0">{detail.school}</h5>
													<p className="color-grey mb-0">{detail.degree+" "+detail.field_of_study}</p>
												</div>
												<div className="col-md-4">
													<div className="student-card__pict-out">
														<img src={require('assets/images/profile.jpeg')} className="img-fluid" />
													</div>
												</div>
											</div>
											<div style={{ height: 290 }} className="student-card--scroll">
												<div className="row">
													<div className="col-12">
														<h5 className="text-semi-bold">Bio</h5>
														<p className="font-14 mb-0">{nl2br(detail.bio)}</p>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(StudentDetail);