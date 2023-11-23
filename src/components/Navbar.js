import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

/**
 * COMPONENTS
 */
import DropdownList from './DropdownList';

const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Español', country_code: 'es' },
];

function Navbar(props) {
	const loggedInCookie = Cookies.get('isLoggedIn') || false;
	const [isLoggedIn, setIsLoggedIn] = useState(loggedInCookie);

	const handleLoginStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				{/* CONTAINER WRAPPER */}
				<div className='container-fluid'>
					{/* TOGGLE BUTTON */}
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars'></i>
					</button>

					{/* COLLAPSIBLE WRAPPER */}
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						{/* BRAND */}
						<a className='navbar-brand mt-2 mt-lg-0' href='/'>
							<img
								src='./images/navbar-logo.png'
								height='70'
								alt='FisioReborn Logo'
								loading='lazy'
							/>
						</a>
						{/* LEFT LINKS */}
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
						{/* LEFT LINKS */}
					</div>
					{/* COLLAPSIBLE WRAPPER */}

					{/* RIGHT ELEMENTS */}
					{/* LANGUAGES */}
					<div className='dropdown mx-3'>
						<a
							className='text-reset me-3 dropdown-toggle hidden-arrow'
							href='#'
							id='navbarDropdownMenuLink'
							role='button'
							data-mdb-toggle='dropdown'
							aria-expanded='false'>
							<i className='fas fa-globe' style={{ color: '#ffffff' }}></i>
						</a>
						<ul
							className='dropdown-menu dropdown-menu-end'
							aria-labelledby='navbarDropdownMenuLink'>
							{languages.map(({ name, country_code, index }) => {
								return (
									<li key={index}>
										<button
											className='dropdown-item'
											onClick={() => {
												i18next.changeLanguage(country_code);
												window.location.reload();
											}}
											disabled={country_code === currentLngCode}>
											<span
												className={`fi fi-${country_code} fis mx-3`}
												style={{
													opacity: country_code === currentLngCode ? 0.5 : 1,
												}}></span>

											{name}
										</button>
									</li>
								);
							})}
						</ul>
					</div>

					<button
						type='button'
						className={isLoggedIn ? 'btn btn-danger' : 'btn btn-warning'}
						onClick={handleLoginStatus}>
						{isLoggedIn ? 'Logout' : 'Login'}
					</button>
				</div>

				{/* {isLoggedIn ? (
						<button
							type='button'
							className='btn btn-danger'
							onClick={() => {
								Cookies.set('isLoggedIn', false);
							}}>
							Logout
						</button>
					) : (
						<button
							type='button'
							className='btn btn-warning'
							onClick={() => {
								Cookies.set('isLoggedIn', true);
							}}>
							Login
						</button>
					)} */}
				{/* CONTAINER WRAPPER */}
			</nav>
		</header>
	);
}

export default Navbar;
