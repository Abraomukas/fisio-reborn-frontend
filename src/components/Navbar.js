import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

/**
 * COMPONENTS
 */
import DropdownList from './DropdownList';

const bgColor = { backgroundColor: '#696969' };
const btnStyle = {
	borderColor: '#8d323f',
	borderWidth: 'medium',
	borderStyle: 'solid',
};

const logoPath = './images/logo.png';
const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Español', country_code: 'es' },
];

function Navbar(props) {
	const isLoggedIn = Cookies.get('isLogged') || false;
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
					<div className='d-flex align-items-center'>
						{/* ICON */}
						<a className='text-reset me-3' href='#'>
							<i className='fas fa-shopping-cart'></i>
						</a>

						{/* NOTIFICATIONS */}
						<div className='dropdown'>
							<a
								className='text-reset me-3 dropdown-toggle hidden-arrow'
								href='#'
								id='navbarDropdownMenuLink'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<i className='fas fa-bell'></i>
								<span className='badge rounded-pill badge-notification bg-danger'>
									1
								</span>
							</a>
							<ul
								className='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuLink'>
								<li>
									<a className='dropdown-item' href='#'>
										Some news
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Another news
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</div>
						{/* AVATAR */}
						<div className='dropdown'>
							<a
								className='dropdown-toggle d-flex align-items-center hidden-arrow'
								href='#'
								id='navbarDropdownMenuAvatar'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<img
									src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
									className='rounded-circle'
									height='25'
									alt='Black and White Portrait of a Man'
									loading='lazy'
								/>
							</a>
							<ul
								className='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuAvatar'>
								<li>
									<a className='dropdown-item' href='#'>
										My profile
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Settings
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* RIGHT ELEMENTS */}
				</div>
				{/* CONTAINER WRAPPER */}
			</nav>
		</header>
	);
}

export default Navbar;
