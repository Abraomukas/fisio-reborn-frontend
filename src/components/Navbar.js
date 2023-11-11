import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

const languages = [
	{ name: 'Español', country_code: 'es' },
	{ name: 'English', country_code: 'gb' },
];

function Navbar(props) {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark h-100 d-flex justify-content-between align-items-center'>
			<div style={{ backgroundColor: 'red' }} className='navbar-left'>
				{/* LINKS */}
				<button
					className='navbar-brand navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fas fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Dashboard
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Team
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Projects
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-middle'>
				<div className='navbar-middle d-flex align-items-center mx-auto'>
					<a href='/'>
						<img
							src='./images/navbar-logo.png'
							height='80'
							alt='FisioReborn Logo'
							loading='lazy'
						/>
					</a>
				</div>
			</div>
			<div className='navbar-right'>
				{/* DARK MODE */}
				<div className='dropdown'>
					<a
						className='text-reset me-3'
						href='#'
						role='button'
						aria-expanded='false'
						onClick={() => {
							Cookies.set('darkMode', !isDarkMode);
							setIsDarkMode(!isDarkMode);
						}}>
						{isDarkMode ? (
							<i className='fas fa-sun' style={{ color: '#ffffff' }} />
						) : (
							<i className='fas fa-moon' style={{ color: '#000000' }} />
						)}
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
