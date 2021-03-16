import './overlay.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Overlay = ({ content, closeHandler }) => {
	return (
		<div className="overlay">
			<div className="overlay__buttons">
				<button onClick={closeHandler}>X</button>
			</div>
			<div className="overlay__content">{content}</div>
		</div>
	);
};

Overlay.propTypes = {
	content: PropTypes.any.isRequired,
	closeHandler: PropTypes.func,
};

export default Overlay;
