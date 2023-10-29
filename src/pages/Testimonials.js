import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function Testimonials() {
	return (
		<div className='container-fluid'>
			<div
				id='carouselBasicExample'
				className='carousel slide carousel-fade'
				data-mdb-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-mdb-target='#carouselBasicExample'
						data-mdb-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'
					/>
					<button
						type='button'
						data-mdb-target='#carouselBasicExample'
						data-mdb-slide-to='1'
						aria-label='Slide 2'
					/>
					<button
						type='button'
						data-mdb-target='#carouselBasicExample'
						data-mdb-slide-to='2'
						aria-label='Slide 3'
					/>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
