import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function Main() {
	return (
		<div>
			<section>
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '7rem', marginBottom: '7rem' }}>
					<Carousel />
				</div>
			</section>
		</div>
	);
}

export default Main;
