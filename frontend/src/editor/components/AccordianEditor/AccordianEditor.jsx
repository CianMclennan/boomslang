import Accordian from 'src/components/Accordian/Accordian.jsx';
import Placeholder from 'src/editor/components/Placeholder/Placeholder.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import { contentUpdated } from 'src/store/reducers/navigation.js';
import template from './AccordianTemplate.js';
import { useDispatch } from 'react-redux';

const AccordianEditor = ({ data, path }) => {
	const dispatch = useDispatch();

	const handleUpdate = () => {
		dispatch(
			contentUpdated({ path: `${path}/data`, content: [...data, template] })
		);
	};
	const deleteHandler = (event, index = false) => {
		event.preventDefault();
		event.stopPropagation();
		let _data = [...data];
		if (index) {
			_data.splice(index, 1);
		}
		dispatch(contentUpdated({ path: `${path}/data`, content: [..._data] }));
	};

	return (
		<>
			<Accordian data={data} path={path} deleteHandler={deleteHandler} />
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
