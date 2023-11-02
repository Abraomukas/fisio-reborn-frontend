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

			<div className='carousel-inner'>
				{/* ITEM */}
				<div className='carousel-item active'>
					<img
						src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
						className='d-block w-100'
						alt='Sunset Over the City'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>

				{/* ITEM */}
				<div className='carousel-item'>
					<img
						src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp'
						className='d-block w-100'
						alt='Sunset Over the City'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>

				{/* ITEM */}
				<div className='carousel-item'>
					<img
						src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp'
						className='d-block w-100'
						alt='Sunset Over the City'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</div>
			</div>

			{/* CONTROLS */}
			<button
				className='carousel-control-prev'
				type='button'
				data-mdb-target='#carouselBasicExample'
				data-mdb-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-mdb-target='#carouselBasicExample'
				data-mdb-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
}

export default Testimonials;
