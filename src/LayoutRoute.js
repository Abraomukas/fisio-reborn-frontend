import { Route } from 'react-router-dom';

/**
 * COMPONENTS
 */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const goToDropdown = [];
const helpDropdown = [];

const headerSites = [
	{ label: 'pages.go_to', dropdown: { goToDropdown } },
	{ label: 'pages.help', dropdown: { helpDropdown } },
];

const afterLoginSites = [
	{ label: 'pages.this_club', dropdown: {} },
	{ label: 'pages.meetings', dropdown: {} },
];

function LayoutRoute(props) {
	return (
		<div>
			<Navbar headerSites={headerSites} afterLoginSites={afterLoginSites} />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
			<Footer />
		</div>
	);
}

export default LayoutRoute;
