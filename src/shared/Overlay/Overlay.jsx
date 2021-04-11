import './overlay.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { OVERLAY, OVERLAY_BUTTONS, OVERLAY_CONTENT } from './constants.js';

const Overlay = ({ content, closeHandler }) => {
	return (
		<div className={OVERLAY}>
			<div className={OVERLAY_BUTTONS}>
				<button onClick={closeHandler}>X</button>
			</div>
			<div className={OVERLAY_CONTENT}>{content}</div>
		</div>
	);
};

Overlay.propTypes = {
	content: PropTypes.any.isRequired,
	closeHandler: PropTypes.func,
};

export default Overlay;
