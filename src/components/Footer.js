import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

const navbarStyle = {
	backgroundColor: '#303030',
	bottom: 0,
	width: '100%',
	color: 'white',
	position: 'absolute',
};

function Footer() {
	return (
		<footer className='text-center' style={navbarStyle}>
			{/* GRID CONTAINER */}
			<div className='container p-4'>
				{/* SOCIAL MEDIA */}
				<section className='mb-4'>
					{/* FACEBOOK */}
					<a
						className='btn btn-primary btn-floating m-1'
						style={{ backgroundColor: '#3b5998' }}
						href='https://www.facebook.com/fisioreborn'
						role='button'>
						<i className='fab fa-facebook-f'></i>
					</a>
					{/*INSTAGRAM */}{' '}
					<a
						className='btn btn-primary btn-floating m-1'
						style={{ backgroundColor: '#ac2bac' }}
						href='https://www.instagram.com/fisioreborn/'
						role='button'>
						<i className='fab fa-instagram'></i>
					</a>
				</section>
				{/* FORM */}
				<section className=''>
					<form action=''>
						{/* GRID ROW */}
						<div className='row d-flex justify-content-center'>
							{/* GRID COLUMN */}
							<div className='col-auto'>
								<p className='pt-2'>
									<strong>Sign up for our newsletter</strong>
								</p>
							</div>
							{/* GRID COLUMN */}
							<div className='col-md-5 col-12'>
								{/* EMAIL INPUT */}
								<div className='form-outline border form-white mb-4'>
									<input
										type='email'
										id='form5Example2'
										className='form-control'
									/>
									<label className='form-label' htmlFor='form5Example2'>
										Email address
									</label>
								</div>
							</div>
							{/* GRID COLUMN */}
							<div className='col-auto'>
								{/* SUBMIT BUTTON */}
								<button type='submit' className='btn btn-primary mb-4'>
									Submit
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
