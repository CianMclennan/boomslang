import PropTypes from 'prop-types';
import React from 'react';
import { useOverlay } from 'src/navigation/OverlayProvider.jsx';

const OverlayBtn = ({ children }) => {
	const { setOverlay, closeOverlay } = useOverlay();
	const openOverlayHandler = () => {
		setOverlay(<button onClick={closeOverlay}>Close</button>);
	};
	return <button onClick={openOverlayHandler}>{children}</button>;
};

OverlayBtn.propTypes = {
	children: PropTypes.any,
};

export default OverlayBtn;
