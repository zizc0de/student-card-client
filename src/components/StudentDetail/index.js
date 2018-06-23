import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentDetail extends Component {
	render() {
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
													<h3 className="text-semi-bold mb-0">Muhammad Abdul Aziz</h3>
													<p>19 years old</p>
													<h5 className="text-semi-bold mb-0">STMIK Bani Saleh</h5>
													<p className="mb-0">S.SI, Sistem Informasi</p>
													<small className="color-grey">2018 - 2022</small>
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
														<p className="font-14 mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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

export default StudentDetail;