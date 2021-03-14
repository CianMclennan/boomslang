import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ text }) => {
	return <span style={{ fontSize: '2rem' }}>{text}</span>;
};

Text.propTypes = {
	text: PropTypes.string,
};

export default Text;
