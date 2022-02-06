import NewScreenEditor from './NewScreenEditor.jsx';
import React from 'react';
import { useOverlay } from 'src/navigation/OverlayProvider.jsx';

const NewScreenButton = () => {
	const { setOverlay } = useOverlay();

	const handleClick = () => {
		setOverlay(<NewScreenEditor />);
	};
	return (
		<button className="editor__button" onClick={handleClick}>
			Add Screen
		</button>
	);
};

export default NewScreenButton;
