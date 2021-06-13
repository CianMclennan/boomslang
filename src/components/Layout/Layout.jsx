import PropTypes from 'prop-types';
import React from 'react';
import { useParser } from 'src/screenBuilder/ParserProvider.jsx';

const Layout = ({ child, style, path }) => {
	const parse = useParser();
	return <div style={style}>{parse({ ...child, path: `${path}/child` })}</div>;
};

Layout.propTypes = {
	child: PropTypes.any.isRequired,
	style: PropTypes.any,
	path: PropTypes.string,
};

export default Layout;
