import './accordian.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import { useParser } from 'src/screenBuilder/ParserProvider.jsx';
import React, { useState } from 'react';

const Accordian = ({ data, path, deleteHandler }) => {
	const [selected, setSelected] = useState(0);
	const parse = useParser();
	const shouldShowDeleteBtn = !isUndefined(deleteHandler);
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
					{typeof title === 'object'
						? parse({ ...title, path: `${path}/data/${index}/title` })
						: title}
					{shouldShowDeleteBtn && (
						<button
							className="editor-icon-btn__delete"
							onClick={(e) => deleteHandler(e, index)}
						/>
					)}
				</div>
				<div className={contentCN}>
					{typeof content === 'object'
						? parse({ ...content, path: `${path}/data/${index}/content` })
						: content}
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
	deleteHandler: PropTypes.func,
};

export default Accordian;
