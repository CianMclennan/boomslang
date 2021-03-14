import PropTypes from 'prop-types';
import React from 'react';
import parse from 'src/screenBuilder/parser.js';

const Layout = ({ child, style }) => {
	return <div style={style}>{parse(child)}</div>;
};

Layout.propTypes = {
	child: PropTypes.any.isRequired,
	style: PropTypes.any,
};

export default Layout;
