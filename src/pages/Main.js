import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import Target from './Target';
import Hero from './Hero';

function Main() {
	const [activeDiv, setActiveDiv] = useState('hero');

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;

		if (scrollPosition < window.innerHeight) {
			setActiveDiv('hero');
		} else if (scrollPosition < 2 * window.innerHeight) {
			setActiveDiv('intro');
		} else if (scrollPosition < 3 * window.innerHeight) {
			setActiveDiv('challenges');
		} else if (scrollPosition < 4 * window.innerHeight) {
			setActiveDiv('about-me');
		} else if (scrollPosition < 5 * window.innerHeight) {
			setActiveDiv('target');
		} else {
			setActiveDiv('testimonials');
		}
	};

	const divHeroStyles = activeDiv === '' ? { height: '100vh' } : {};
	const divIntroStyles = activeDiv === '' ? { height: '100vh' } : {};
	const divChallengesStyles = activeDiv === '' ? { height: '100vh' } : {};
	const divAboutMeStyles = activeDiv === '' ? { height: '100vh' } : {};
	const divTargetStyles = activeDiv === '' ? { height: '100vh' } : {};
	const divTestimonialsStyles = activeDiv === '' ? { height: '100vh' } : {};

	return (
		<div>
			<Navbar />
			{/* HERO */}
			<section style={{ height: '100vh', transition: 'height 0.5s ease' }}>
				<Hero />
			</section>
			{/* INTRO */}
			<section
				style={{ height: '100vh', transition: 'height 0.5s ease' }}></section>
			{/* CHALLENGES */}
			<section
				style={{ height: '100vh', transition: 'height 0.5s ease' }}></section>
			{/* ABOUT ME */}
			<section style={{ height: '100vh', transition: 'height 0.5s ease' }}>
				<AboutMe />
			</section>
			{/* TARGET */}
			<section style={{ height: '100vh', transition: 'height 0.5s ease' }}>
				<Target />
			</section>
			{/* TESTIMONIALS */}
			<section style={{ height: '100vh', transition: 'height 0.5s ease' }}>
				<Testimonials />
			</section>
			<Footer />
		</div>
	);
}

export default Main;
