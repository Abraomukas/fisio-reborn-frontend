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
			<section style={{ height: '100vh' }}>
				<div className='d-flex justify-content-center'>
					<div>Hello FisioReborn!</div>
				</div>
			</section>
			{/* INTRO */}
			<section></section>
			{/* CHALLENGES */}
			<section></section>
			{/* ABOUT ME */}
			<section style={{ height: '100vh' }}>
				<AboutMe />
			</section>
			{/* TARGET */}
			<section style={{ height: '100vh' }}>
				<Target />
			</section>
			{/* TESTIMONIALS */}
			<section style={{ height: '100vh' }}>
				<Testimonials />
			</section>
			<Footer />
		</div>
	);
}

export default Main;
