import './accordian.scss';
import Placeholder from 'src/components/Placeholder/Placeholder.jsx';
import PropTypes from 'prop-types';
import clone from 'lodash/clone';
import parse from 'src/screenBuilder/parser.js';
import template from './AccordianTemplate.js';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';
import { ACCORDIAN, CONTENT, CONTENT_HIDDEN, HEADER } from './constants.js';
import React, { useState } from 'react';

const Accordian = ({ data, path }) => {
	const _screenId = path.match(/^\w+/).pop();
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(0);
	const [screenId, setScreenId] = useState(_screenId);

	const resetState = () => {
		setScreenId(_screenId);
		setSelected(0);
	};
	if (screenId !== _screenId) {
		// if the screen has changed reset the state.
		resetState();
	}

	const handleHeaderClick = (index) => {
		const newIndex = index === selected ? -1 : index;
		setSelected(newIndex);
	};
	const handleUpdate = () => {
		const _data = clone(data);
		_data.push(template);
		dispatch(updateContent({ path: `${path}/data`, content: _data }));
	};
	const content = (data || []).map(({ title, content }, index) => {
		const isHidden = index !== selected;
		return (
			<section key={index}>
				<div className={HEADER} onClick={() => handleHeaderClick(index)}>
					{parse({ ...title, path: `${path}/data/${index}/title` })}
				</div>
				<div className={`${isHidden ? CONTENT_HIDDEN : CONTENT}`}>
					{parse({ ...content, path: `${path}/data/${index}/content` })}
				</div>
			</section>
		);
	});

	return (
		<div className={ACCORDIAN}>
			{content}
			<Placeholder handleUpdate={handleUpdate} />
		</div>
	);
};

Accordian.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.any.isRequired,
			content: PropTypes.any.isRequired,
		})
	),
	path: PropTypes.string,
};

export default Accordian;
