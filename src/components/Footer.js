import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

const navbarStyle = {
	backgroundColor: '#235679',
	bottom: 0,
	marginTop: '3rem',
	width: '100%',
};

function Footer() {
	return (
		<footer className='text-center text-white' style={navbarStyle}>
			<div className='container p-4'>
				<section>
					<Translation>
						{(t) => (
							<small>
								{t('footer.disclaimer_one')}
								<Link
									className='text-white text-decoration-none'
									to='www.toastmasters.org'>
									FisioReborn
								</Link>
								. {t('footer.disclaimer_two')}
							</small>
						)}
					</Translation>
				</section>
			</div>

			<div
				className='text-center p-3'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				<Translation>
					{(t) => (
						<small>
							<strong>FisioReborn</strong> - {t('footer.note')} Abraomukas
						</small>
					)}
				</Translation>
			</div>
		</footer>
	);
}

export default Footer;
