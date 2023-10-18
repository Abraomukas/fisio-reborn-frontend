import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function Target() {
	return (
		<div className='text-center'>
			<h4 className='mb-5'>
				<strong>Objetivos</strong>
			</h4>

			<div className='row'>
				<div className='col-lg-4 col-md-12 mb-4'>
					<div className='card'>
						<div
							className='bg-image hover-overlay ripple'
							data-mdb-ripple-color='light'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
								className='img-fluid'
							/>
							<a href='#!'>
								<div
									className='mask'
									style={{
										backgroundColor: 'rgba(251, 251, 251, 0.15)',
									}}></div>
							</a>
						</div>
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href='#!' className='btn btn-primary'>
								Button
							</a>
						</div>
					</div>
				</div>

				<div classNameName='col-lg-4 col-md-12 mb-4'>
					<div className='card'>
						<div
							className='bg-image hover-overlay ripple'
							data-mdb-ripple-color='light'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/023.jpg'
								className='img-fluid'
							/>
							<a href='#!'>
								<div
									className='mask'
									style={{
										backgroundColor: 'rgba(251, 251, 251, 0.15)',
									}}></div>
							</a>
						</div>
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href='#!' className='btn btn-primary'>
								Button
							</a>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-12 mb-4'>
					<div className='card'>
						<div
							className='bg-image hover-overlay ripple'
							data-mdb-ripple-color='light'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/111.jpg'
								className='img-fluid'
							/>
							<a href='#!'>
								<div
									className='mask'
									style={{
										backgroundColor: 'rgba(251, 251, 251, 0.15)',
									}}></div>
							</a>
						</div>
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href='#!' className='btn btn-primary'>
								Button
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Target;
