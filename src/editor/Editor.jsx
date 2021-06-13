import './editor.scss';
import App from 'src/App.jsx';
import OverlayBtn from './OverlayBtn.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import editorParser from 'src/screenBuilder/editorParser.js';
import { useSelector } from 'react-redux';
import { EDITOR, EDITOR_HIDDEN, TOGGLE_EDITOR, WRAPPER } from './constants.js';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(false);
	const currentScreen = useSelector(({ navigation }) => {
		const { current_screen: screen } = navigation;
		return screen;
	});

	return (
		<ParserProvider value={isHidden ? defaultParser : editorParser}>
			<OverlayProvider>
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
					</div>
					<App />
				</div>
			</OverlayProvider>
		</ParserProvider>
	);
};

export default Editor;
