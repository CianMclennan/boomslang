import './overlay.scss';
import PropTypes from 'prop-types';
import isNull from 'lodash/isNull';
import React, { createContext, useContext, useState } from 'react';

const OverlayContext = createContext();

export const useOverlay = () => {
	return useContext(OverlayContext);
};

const OverlayProvider = ({ children }) => {
	const [overlay, setOverlay] = useState(null);
	const closeOverlay = () => {
		setOverlay(null);
	};

	return (
		<OverlayContext.Provider value={{ setOverlay, closeOverlay }}>
			{!isNull(overlay) && <div className={'overlay fadeIn'}>{overlay}</div>}
			{children}
		</OverlayContext.Provider>
	);
};

OverlayProvider.propTypes = {
	children: PropTypes.object,
};

export default OverlayProvider;
