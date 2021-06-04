import './accordian.scss';
import Accordian from 'src/components/Accordian/Accordian.jsx';
import Placeholder from 'src/components/Placeholder/Placeholder.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import clone from 'lodash/clone';
import template from './AccordianTemplate.js';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';

const AccordianEditor = ({ data, path }) => {
	const dispatch = useDispatch();

	const handleUpdate = () => {
		const _data = clone(data);
		_data.push(template);
		dispatch(updateContent({ path: `${path}/data`, content: _data }));
	};

	return (
		<>
			<Accordian data={data} path={path} />
			<Placeholder handleUpdate={handleUpdate} />
		</>
	);
};

AccordianEditor.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.any.isRequired,
			content: PropTypes.any.isRequired,
		})
	),
	path: PropTypes.string,
};

export default Accordian;
