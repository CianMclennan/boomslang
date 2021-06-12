import './editor.scss';
import App from 'src/App.jsx';
import OverlayBtn from './OverlayBtn.jsx';
import { useSelector } from 'react-redux';
import { EDITOR, EDITOR_HIDDEN, TOGGLE_EDITOR, WRAPPER } from './constants.js';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(true);
	const currentScreen = useSelector(({ navigation }) => {
		const { current_screen: screen } = navigation;
		return screen;
	});

	return (
		<div className={WRAPPER}>
			<button className={TOGGLE_EDITOR} onClick={() => setIsHidden(!isHidden)}>
				{isHidden ? 'Editor' : 'Hide'}
			</button>
			<div className={isHidden ? EDITOR_HIDDEN : EDITOR}>
				<div>Current Screen: {currentScreen}</div>
				<OverlayBtn>Overlay Btn</OverlayBtn>
			</div>
			<App />
		</div>
	);
};

export default Editor;
