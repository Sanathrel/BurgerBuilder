import React from 'react';

import './Layout.css';

import Aux from '../../HOC/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
	return (
		<Aux>
			<div>
				<Toolbar />
			</div>
			<main className='Content'>
				{props.children}
			</main>
		</Aux>
	);
}

export default layout;