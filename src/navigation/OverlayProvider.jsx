import './overlay.scss';
import PropTypes from 'prop-types';
import isNull from 'lodash/isNull';
import React, { createContext, useContext, useState } from 'react';

const OverlayContext = createContext();

export const useOverlay = () => {
	return useContext(OverlayContext);
};

const OverlayProvider = ({ children }) => {
	const [content, setOverlayContent] = useState(null);
	const closeOverlay = () => {
		setOverlayContent(null);
	};
	return (
		<OverlayContext.Provider value={{ setOverlayContent, closeOverlay }}>
			{!isNull(content) && <div className={'overlay fadeIn'}>{content}</div>}
			{children}
		</OverlayContext.Provider>
	);
};

OverlayProvider.propTypes = {
	children: PropTypes.object,
};

export default OverlayProvider;
