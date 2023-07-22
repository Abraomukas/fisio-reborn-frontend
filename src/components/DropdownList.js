import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';

function DropdownList(props) {
	return (
		<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
			{props.dropdown.map((linkObj, index) => {
				return (
					<li key={index}>
						<Translation>
							{(t) => (
								<Link className='dropdown-item' to={linkObj.path}>
									{t(linkObj.label)}
								</Link>
							)}
						</Translation>
					</li>
				);
			})}
		</ul>
	);
}

export default DropdownList;
