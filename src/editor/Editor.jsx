import './editor.scss';
import App from 'src/App.jsx';
import JsonEditor from './views/JsonEditor/JsonEditor.jsx';
import Overlay from './views/Overlay/Overlay.jsx';
import { useSelector } from 'react-redux';
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
		<div className={`wrapper ${isHidden ? 'wrapper--hidden' : ''}`}>
			<div className="editor">
				<button
					className="editor__toggle-btn"
					onClick={() => setIsHidden(!isHidden)}
				>
					{isHidden ? 'Editor' : 'Hide'}
				</button>
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
