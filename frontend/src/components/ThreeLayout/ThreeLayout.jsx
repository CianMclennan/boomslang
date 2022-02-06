import './three-layout.scss';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutHorizontal = ({ sections, seperation }) => {
	const inlineStyle = {
		gridTemplateColumns: seperation.join(' '),
	};

	return (
		<div className="layout-horizontal" style={inlineStyle}>
			{sections}
		</div>
	);
};

LayoutHorizontal.propTypes = {
	sections: PropTypes.array,
	seperation: PropTypes.array,
};

export default LayoutHorizontal;
