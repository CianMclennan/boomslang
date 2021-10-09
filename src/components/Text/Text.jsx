import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ text, style }) => {
	return <span style={style}>{text}</span>;
};

Text.propTypes = {
	text: PropTypes.string,
	style: PropTypes.object,
};

export default Text;
