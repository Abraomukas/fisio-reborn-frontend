import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function Hero() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<div>WELCOME TO FISIOREBORN!</div>
		</div>
	);
}

export default Hero;
