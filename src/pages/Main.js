import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Main() {
	return (
		<div>
			<Navbar />
			{/* HERO */}
			<section>
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '7rem', marginBottom: '7rem' }}>
					<div>Hello FisioReborn!</div>
				</div>
			</section>
			{/* INTRO */}
			<section></section>
			{/* BENEFITS */}
			<section></section>
			{/* CTA */}
			<section></section>
			{/* ABOUT ME */}
			<section></section>
			{/* TARGET */}
			<section></section>
			{/* TESTIMONIALS */}
			<section></section>
			{/* CTA */}
			<section></section>
			<Footer />
		</div>
	);
}

export default Main;
