import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import store from './store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const spinnerSizing = { width: '3rem', height: '3rem' };

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div className='spinner-border' style={spinnerSizing} role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

/**
 * PAGES
 */
import ErrorPage from './pages/Error';
import Main from './pages/Main';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/about',
		element: (
			<div>
				<h3>About me</h3>
			</div>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: '/services',
		element: (
			<div>
				<h3>Services</h3>
			</div>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: '/contact',
		element: (
			<div>
				<h3>Contact me</h3>
			</div>
		),
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);