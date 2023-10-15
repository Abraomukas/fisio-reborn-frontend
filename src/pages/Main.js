import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';

function Main() {
	return (
		<div>
			<Navbar />
			{/* HERO */}
			<section>
				<div
					className='d-flex justify-content-center min-vh-100'
					style={{ marginTop: '7rem', marginBottom: '7rem' }}>
					<div>Hello FisioReborn!</div>
				</div>
			</section>
			{/* INTRO */}
			<section></section>
			{/* CHALLENGES */}
			<section></section>
			{/* ABOUT ME */}
			<section>
				<AboutMe />
			</section>
			{/* TARGET */}
			<section></section>
			{/* TESTIMONIALS */}
			<section></section>
			<Footer />
		</div>
	);
}

export default Main;
