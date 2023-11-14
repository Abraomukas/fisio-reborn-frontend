import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function AboutMe() {
	return (
		<div
			className='container-fluid'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<div className='row gx-1'>
				<div className='col-lg-2 col-md-1'></div>
				<div className='col-lg-4 col-md-5'>
					<div
						className='bg-image hover-overlay ripple shadow-2-strong rounded-3'
						data-mdb-ripple-color='light'>
						<img src='./images/profile.jpg' className='img-fluid' />
					</div>
				</div>
				<div className='col-lg-4 col-md-5'>
					<div className='container'>
						<h1 className='display-1 fw-bold'>
							<strong>¿Quién soy?</strong>
						</h1>

						<br />

						<h3>
							<strong>Mi nombre es Javier Varo</strong>
						</h3>

						<br />

						<p>
							Quisque sollicitudin condimentum diam, quis egestas neque congue
							vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
							quis. Donec sit amet elit id erat pharetra molestie et a ante.
							Integer nec vestibulum nunc. Maecenas commodo erat ut felis
							eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
							congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
							sodales placerat, laoreet sit amet sapien.
						</p>

						<br />

						<p>
							Quisque sollicitudin condimentum diam, quis egestas neque congue
							vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
							quis. Donec sit amet elit id erat pharetra molestie et a ante.
							Integer nec vestibulum nunc. Maecenas commodo erat ut felis
							eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
							congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
							sodales placerat, laoreet sit amet sapien.
						</p>
					</div>
				</div>
				<div className='col-lg-2 col-md-1'></div>
			</div>
		</div>
		// <div className='row'>
		// 	<div className='col-md-6 gx-5 mb-4'>

		// 	</div>
		// 	<div className='col-md-6 gx-5 mb-4'>
		// 		<h4>
		// 			<strong>¿Quién soy?</strong>
		// 		</h4>

		// 		<p>
		// 			<strong>Mi nombre es Javier Varo</strong>
		// 		</p>
		// 	</div>
		// </div>
	);
}

export default AboutMe;