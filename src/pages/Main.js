import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//* PAGES
import Hero from './Hero';
import Challenges from './Challenges';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import Target from './Target';

function Main() {
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
		const handleScroll = () => {
			const newActiveDiv = Math.floor(window.scrollY / window.innerHeight);
			setActiveDiv(newActiveDiv);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const sections = [Hero, Challenges, AboutMe, Target, Testimonials];

	const divStyles = {
		height: '100vh',
		// transition: 'height 0.5s ease',
		// visibility: 'hidden',
		// opacity: 0,
	};

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* SECTIONS */}
			{sections.map((SectionComponent, index) => (
				<section key={index}>
					<div
						style={{
							...divStyles,
							// height: activeDiv === index ? '100vh' : '0',
							// visibility: activeDiv === index ? 'visible' : 'hidden',
							// opacity: activeDiv === index ? 1 : 0,
						}}>
						<SectionComponent />
					</div>
				</section>
			))}

			<Footer />
		</div>
	);
}

export default Main;
