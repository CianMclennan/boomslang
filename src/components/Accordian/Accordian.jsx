import './accordian.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useParser } from 'src/screenBuilder/ParserProvider.jsx';
import React, { useState } from 'react';

const Accordian = ({ data, path }) => {
	const [selected, setSelected] = useState(0);
	const parse = useParser();
	const handleHeaderClick = (index) => {
		const newIndex = index === selected ? -1 : index;
		setSelected(newIndex);
	};

	const content = (data || []).map(({ title, content }, index) => {
		const isHidden = index !== selected;
		const contentCN = classnames('accordian__content', {
			'accordian__content--hidden': isHidden,
		});
		return (
			<section key={index}>
				<div
					className="accordian__header"
					onClick={() => handleHeaderClick(index)}
				>
					{parse({ ...title, path: `${path}/data/${index}/title` })}
				</div>
				<div className={contentCN}>
					{parse({ ...content, path: `${path}/data/${index}/content` })}
				</div>
			</section>
		);
	});

	return <div className="accordian">{content}</div>;
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
