import './text-editor.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Text from 'src/components/Text/Text.jsx';
import TextEditorModal from './TextEditorModal.jsx';
import { useOverlay } from 'src/navigation/OverlayProvider.jsx';

const TextEditor = ({ text, path }) => {
	const { setOverlay } = useOverlay();
	const onEditBtn = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setOverlay(<TextEditorModal text={text} path={path} />);
	};

	return (
		<div className="text-editor">
			<Text text={text} />
			<button
				className="editor-icon-btn editor-icon-btn__edit"
				onClick={onEditBtn}
			/>
		</div>
	);
};

TextEditor.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
};

export default TextEditor;
