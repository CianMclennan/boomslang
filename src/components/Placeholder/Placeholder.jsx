import './placeholder.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Placeholder = ({ id, handleUpdate }) => {
	return (
		<button className="placeholder" onClick={() => handleUpdate(id)}>
			Add
		</button>
	);
};

Placeholder.propTypes = {
	handleUpdate: PropTypes.func.isRequired,
	id: PropTypes.string,
};

export default Placeholder;
