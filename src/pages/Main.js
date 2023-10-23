import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import Target from './Target';

function Main() {
	return (
		<div>
			<Navbar />
			{/* HERO */}
			<section>
				<div
					className='d-flex justify-content-center min-vh-100'
					style={{ marginTop: '3rem', marginBottom: '3rem' }}>
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
			<section>{/* <Target /> */}</section>
			{/* TESTIMONIALS */}
			<section>{/* <Testimonials /> */}</section>
			<Footer />
		</div>
	);
}

export default Main;
