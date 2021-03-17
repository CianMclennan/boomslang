import PropTypes from 'prop-types';
import React from 'react';
import parse from 'src/screenBuilder/parser.js';

const Layout = ({ child, style, path }) => {
	return <div style={style}>{parse({ ...child, path: `${path}/child` })}</div>;
};

Layout.propTypes = {
	child: PropTypes.any.isRequired,
	style: PropTypes.any,
	path: PropTypes.string,
};

export default Layout;
