import PropTypes from 'prop-types';
import { useParser } from 'src/screenBuilder/ParserProvider.jsx';
import { useSelector } from 'react-redux';
import React, { forwardRef } from 'react';

const Screen = forwardRef((props, ref) => {
	const { screenId, ...properties } = props;
	const parse = useParser();
	const content = useSelector(
		({ navigation }) => navigation.screen_content[screenId]
	);
	return (
		<main ref={ref} {...properties}>
			{parse(content)}
		</main>
	);
});

Screen.displayName = 'Screen';
Screen.propTypes = {
	screenId: PropTypes.string.isRequired,
};

export default Screen;
