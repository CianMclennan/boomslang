import Accordian from 'src/components/Accordian/Accordian.jsx';
import Placeholder from 'src/editor/components/Placeholder/Placeholder.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import template from './AccordianTemplate.js';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';

const AccordianEditor = ({ data, path }) => {
	const dispatch = useDispatch();

	const handleUpdate = () => {
		dispatch(
			updateContent({ path: `${path}/data`, content: [...data, template] })
		);
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

export default AccordianEditor;
