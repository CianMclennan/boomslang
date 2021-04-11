import React from 'react';
import { useDispatch } from 'react-redux';
import { nextScreen, prevScreen } from 'src/store/reducers/navigation.js';

const Footer = () => {
	const dispatch = useDispatch();

	return (
		<footer className="navigation__footer">
			<div className="navigation__footer__buttons">
				<button onClick={() => dispatch(prevScreen())}>Prev</button>
				<button onClick={() => dispatch(nextScreen())}>Next</button>
			</div>
		</footer>
	);
};
export default Footer;
