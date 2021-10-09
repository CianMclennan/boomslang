import './placeholder.scss';
import PropTypes from 'prop-types';
import React from 'react';
import isUndefined from 'lodash/isUndefined';

const Placeholder = ({ handleUpdate, path }) => {
	const defaultHandleUpdate = (path) => {
		alert(`Update handler is undefined for '${path}'`);
	};

	return (
		<div
			className="placeholder"
			onClick={(event) => {
				event.preventDefault();
				event.stopPropagation();
				!isUndefined(handleUpdate)
					? handleUpdate(path)
					: defaultHandleUpdate(path);
			}}
		>
			<div className="placeholder__bar" />
			<div className="placeholder__cirlce">+</div>
			<div className="placeholder__bar" />
		</div>
	);
};

Placeholder.propTypes = {
	handleUpdate: PropTypes.func,
	path: PropTypes.string,
};

export default Placeholder;
