import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * COMPONENTS
 */
import LayoutRoute from './LayoutRoute';

/**
 * PAGES
 */
import Main from './pages/Main';

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
