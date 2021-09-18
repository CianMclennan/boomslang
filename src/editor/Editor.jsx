import './editor.scss';
import App from 'src/App.jsx';
import OverlayBtn from './OverlayBtn.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import editorParser from 'src/screenBuilder/editorParser.js';
import { postScreen } from 'src/screenBuilder/fetchScreen.js';
import { useSelector } from 'react-redux';
import { EDITOR, EDITOR_HIDDEN, TOGGLE_EDITOR, WRAPPER } from './constants.js';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [currentScreen, screenContent] = useSelector(({ navigation }) => {
		const { current_screen: screen, screen_content: content } = navigation;
		return [screen, content[screen]];
	});

	const test = () => {
		postScreen(currentScreen, screenContent);
	};

	return (
		<ParserProvider value={isHidden ? defaultParser : editorParser}>
			<div className={WRAPPER}>
				<button
					className={TOGGLE_EDITOR}
					onClick={() => setIsHidden(!isHidden)}
				>
					{isHidden ? 'Editor' : 'Hide'}
				</button>
				<div className={isHidden ? EDITOR_HIDDEN : EDITOR}>
					<div>Current Screen: {currentScreen}</div>
					<OverlayBtn>Overlay Btn</OverlayBtn>
					<button onClick={test}>Save</button>
				</div>
				<App />
			</div>
		</ParserProvider>
	);
};

export default Editor;
