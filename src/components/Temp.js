import React, { useState } from 'react';
import Cookies from 'js-cookie';

const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Español', country_code: 'es' },
];

function Temp(props) {
	const currentLngCode = Cookies.get('i18next') || 'es';
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<nav className='d-flex w-100 justify-content-between align-items-center'>
			<div style={{ background: 'blue', flex: 1, minHeight: 100 }}>
				<button></button>
			</div>
			<div
				className='d-flex justify-content-center align-items-center navbar navbar-expand-lg navbar-dark bg-dark'
				style={{ flex: 1, minHeight: 100 }}>
				{/* BRAND */}
				<a href='/'>
					<img
						src='./images/navbar-logo.png'
						height='80'
						alt='FisioReborn Logo'
						loading='lazy'
					/>
				</a>
			</div>
			<div
				className='d-flex justify-content-end align-items-center navbar navbar-expand-lg navbar-dark bg-dark'
				style={{ flex: 1, minHeight: 100 }}>
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
				{/* PROFILE */}

				{isLoggedIn ? (
					<div className='d-flex mx-3'>
						<button
							type='button'
							className={isLoggedIn ? 'btn btn-danger' : 'btn btn-warning'}
							onClick={handleLoginStatus}>
							{isLoggedIn ? 'Logout' : 'Login'}
						</button>
						<button
							type='button'
							className={isLoggedIn ? 'btn btn-danger' : 'btn btn-warning'}
							onClick={handleLoginStatus}>
							{isLoggedIn ? 'Logout' : 'Login'}
						</button>
					</div>
				) : (
					<div className='d-flex mx-3'>
						<button
							type='button'
							className='btn btn-warning'
							onClick={handleLoginStatus}>
							Login
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Temp;
