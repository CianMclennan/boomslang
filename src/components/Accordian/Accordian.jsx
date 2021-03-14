import './accordian.scss';
import PropTypes from 'prop-types';
import parse from 'src/parser/parser.js';
import { ACCORDIAN, CONTENT, CONTENT_HIDDEN, HEADER } from './constants.js';
import React, { useState } from 'react';

const Accordian = ({ data }) => {
	const [selected, setSelected] = useState(0);

	const handleHeaderClick = (index) => {
		const newIndex = index === selected ? -1 : index;
		setSelected(newIndex);
	};
	const content = (data || []).map(({ title, content }, index) => {
		const isHidden = index !== selected;
		return (
			<div key={index}>
				<div className={HEADER} onClick={() => handleHeaderClick(index)}>
					{parse(title)}
				</div>
				<div className={`${isHidden ? CONTENT_HIDDEN : CONTENT}`}>
					{parse(content)}
				</div>
			</div>
		);
	});

	return <div className={ACCORDIAN}>{content}</div>;
};

Accordian.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.any.isRequired,
			content: PropTypes.any.isRequired,
		})
	),
};

export default Accordian;
