import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Main() {
	return (
		<div>
			<Navbar />
			<section>
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '7rem', marginBottom: '7rem' }}>
					<div>Hello FisioReborn!</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Main;
