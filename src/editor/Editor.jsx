import './editor.scss';
import App from 'src/App.jsx';
import JsonEditor from './views/JsonEditor/JsonEditor.jsx';
import Overlay from 'src/shared/Overlay/Overlay.jsx';
import { useSelector } from 'react-redux';
import { EDITOR, EDITOR_HIDDEN, TOGGLE_EDITOR, WRAPPER } from './constants.js';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [overlay, setOverlay] = useState(null);
	const [currentScreen, screenContent] = useSelector(({ navigation }) => {
		const { current_screen: screen, screen_content: content } = navigation;
		return [screen, content[screen]];
	});

	const handleClose = () => {
		setOverlay(null);
	};
	const handleOpenJsonEditor = () => {
		setOverlay(<JsonEditor src={screenContent} />);
	};

	return (
		<div className={WRAPPER}>
			<button className={TOGGLE_EDITOR} onClick={() => setIsHidden(!isHidden)}>
				{isHidden ? 'Editor' : 'Hide'}
			</button>
			<div className={isHidden ? EDITOR_HIDDEN : EDITOR}>
				<div>Current Screen: {currentScreen}</div>
				<button onClick={handleOpenJsonEditor}>Edit screen</button>
			</div>
			<App />
			{overlay && (
				<Overlay content={overlay} closeHandler={handleClose}></Overlay>
			)}
		</div>
	);
};

export default Editor;
