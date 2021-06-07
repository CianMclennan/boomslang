import './placeholder.scss';
import Overlay from 'src/shared/Overlay/Overlay.jsx';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const Placeholder = ({ handleUpdate, path }) => {
	const [overlay, setOverlay] = useState(null);
	const dispatch = useDispatch();

	const handleOverlayClose = () => {
		setOverlay(null);
	};

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
		<>
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
			{overlay && (
				<Overlay content={overlay} closeHandler={handleOverlayClose} />
			)}
		</>
	);
};

Placeholder.propTypes = {
	handleUpdate: PropTypes.func,
	path: PropTypes.string,
};

export default Placeholder;
