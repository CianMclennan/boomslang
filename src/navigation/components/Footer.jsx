import CommonButton from 'src/styledComponents/CommonButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { nextScreen, prevScreen } from 'src/store/reducers/navigation.js';

const Footer = () => {
	const dispatch = useDispatch();

	return (
		<footer className="navigation__footer">
			<div className="navigation__footer__buttons">
				<CommonButton onClick={() => dispatch(prevScreen())}>Prev</CommonButton>
				<CommonButton onClick={() => dispatch(nextScreen())}>Next</CommonButton>
			</div>
		</footer>
	);
};
export default Footer;
