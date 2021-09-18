import './placeholder.scss';
import PropTypes from 'prop-types';
import React from 'react';
import isUndefined from 'lodash/isUndefined';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';

const Placeholder = ({ handleUpdate, path }) => {
	const dispatch = useDispatch();

	const defaultHandleUpdate = (path) => {
		dispatch(
			updateContent({
				path,
				content: {
					component: 'Text',
					text: 'this is a test',
				},
			})
		);
	};

	return (
		<button
			className="placeholder"
			onClick={(event) => {
				event.preventDefault();
				event.stopPropagation();
				!isUndefined(handleUpdate)
					? handleUpdate(path)
					: defaultHandleUpdate(path);
			}}
		>
			Add
		</button>
	);
};

Placeholder.propTypes = {
	handleUpdate: PropTypes.func,
	path: PropTypes.string,
};

export default Placeholder;
