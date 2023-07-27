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

const router = createBrowserRouter([
	{ path: '/', element: <div>Hello FisioReborn!</div> },
]);

// ReactDOM.render(
// 	<React.Suspense fallback={spinnerFallback}>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React.Suspense>,
// 	document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);