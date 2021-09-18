/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { updateContent } from 'src/store/reducers/navigation.js';
import { useDispatch } from 'react-redux';
import { useOverlay } from 'src/navigation/OverlayProvider.jsx';
import React, { useState } from 'react';

const TextEditor = ({ text, path }) => {
	const dispatch = useDispatch();
	const { closeOverlay } = useOverlay();
	const [textValue, setTextValue] = useState(text);

	const handleTextChange = ({ target: { value } }) => {
		setTextValue(value);
		dispatch(
			updateContent({ path, content: { component: 'Text', text: value } })
		);
	};

	return (
		<div style={{ color: 'white' }}>
			<button onClick={closeOverlay}>Close</button>
			<div className="text-editor-modal">
				<input type="text" value={textValue} onChange={handleTextChange} />
			</div>
		</div>
	);
};

TextEditor.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
};

export default TextEditor;
