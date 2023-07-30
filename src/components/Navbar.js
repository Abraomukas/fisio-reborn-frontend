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
			<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
				{/* CONTAINER WRAPPER */}
				<div class='container-fluid'>
					{/* TOGGLE BUTTON */}
					<button
						class='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i class='fas fa-bars'></i>
					</button>

					{/* COLLAPSIBLE WRAPPER */}
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						{/* BRAND */}
						<a class='navbar-brand mt-2 mt-lg-0' href='/'>
							<img
								src='./images/navbar-logo.png'
								height='70'
								alt='FisioReborn Logo'
								loading='lazy'
							/>
						</a>
						{/* LEFT LINKS */}
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Dashboard
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Team
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Projects
								</a>
							</li>
						</ul>
						{/* LEFT LINKS */}
					</div>
					{/* COLLAPSIBLE WRAPPER */}

					{/* RIGHT ELEMENTS */}
					<div class='d-flex align-items-center'>
						{/* ICON */}
						<a class='text-reset me-3' href='#'>
							<i class='fas fa-shopping-cart'></i>
						</a>

						{/* NOTIFICATIONS */}
						<div class='dropdown'>
							<a
								class='text-reset me-3 dropdown-toggle hidden-arrow'
								href='#'
								id='navbarDropdownMenuLink'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<i class='fas fa-bell'></i>
								<span class='badge rounded-pill badge-notification bg-danger'>
									1
								</span>
							</a>
							<ul
								class='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuLink'>
								<li>
									<a class='dropdown-item' href='#'>
										Some news
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Another news
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</div>
						{/* AVATAR */}
						<div class='dropdown'>
							<a
								class='dropdown-toggle d-flex align-items-center hidden-arrow'
								href='#'
								id='navbarDropdownMenuAvatar'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<img
									src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
									class='rounded-circle'
									height='25'
									alt='Black and White Portrait of a Man'
									loading='lazy'
								/>
							</a>
							<ul
								class='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuAvatar'>
								<li>
									<a class='dropdown-item' href='#'>
										My profile
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Settings
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
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
