import React from 'react';

import './Logo.css';

import burgerLogo from '../../Assets/Images/burger-logo.png';

const logo = (props) => (
	<div className='Logo'>
		<img src={burgerLogo} alt="BurgerLogo"/>
	</div>
)

export default logo;