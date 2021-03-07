import React from 'react';
import PropTypes from 'prop-types';
import parse from 'src/parser/parser.js';

const Layout = ({ child, style }) => {
	return <div style={style}>{parse(child)}</div>;
};

Layout.propTypes = {
	child: PropTypes.any.isRequired,
	style: PropTypes.any,
};

export default Layout;
