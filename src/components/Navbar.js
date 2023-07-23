import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Translation } from 'react-i18next';
import i18next from 'i18next';

/**
 * COMPONENTS
 */
import DropdownList from './DropdownList';

const bgColor = { backgroundColor: '#red' };
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
			<div className='navbar fixed-top navbar-expand-lg' style={navbarBgColor}>
				<div className='container-fluid'>
					{/* BRAND */}

					<div className='d-flex align-items-center'>
						<Link className='navbar-brand' to='/'>
							<img
								src={logoPath}
								height='55'
								alt='easierSpeak'
								loading='lazy'
							/>
						</Link>
						<Translation>
							{(t) => (
								<Link className='navbar-brand text-white fw-bold' to='/'>
									{t('title')} {isLoggedIn ? ' - ' + props.clubName : ''}
								</Link>
							)}
						</Translation>
					</div>
					{/* SECTIONS */}
					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav'></ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
