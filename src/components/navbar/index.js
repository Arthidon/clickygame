import React from 'react';
import propTypes from 'prop-types'
import './style.css';

// import brand from './sun.png';

export default function Navbar ({
    score,
    highScore,
    attempts,
}){
	return (
		<nav className='navbar fixed-top navbar-expand-md navbar-light'>
			<span className='navbar-brand'>
            <h2>Match the Ningyō Dolls</h2>
				<img src={''} alt='' />
			</span>
			<div className='nav-item'>
				Score: {score} &nbsp;<span className='seperator'>|</span>&nbsp;
				Top Score: {highScore}<span className='seperator'>|</span>&nbsp;
                Attemps: {attempts}
			</div>
		</nav>
	);
};

Navbar.propTypes = {
    score: propTypes.number.isRequired,
    highScore: propTypes.number.isRequired,
    attempts: propTypes.number.isRequired,
}
