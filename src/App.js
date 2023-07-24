import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';

/**
 * COMPONENTS
 */

/**
 * PAGES
 */

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<LayoutRoute path='/' component={Main} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
