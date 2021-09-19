import './editor.scss';
import App from 'src/App.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import classnames from 'classnames';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import editorParser from 'src/screenBuilder/editorParser.js';
import { postScreen } from 'src/screenBuilder/fetchScreen.js';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

export const EDITOR = 'editor';
export const EDITOR_HIDDEN = `${EDITOR} ${EDITOR}--hidden`;

const Editor = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [currentScreen, screenContent] = useSelector(({ navigation }) => {
		const { current_screen: screen, screen_content: content } = navigation;
		return [screen, content[screen]];
	});

	const btnText = isHidden ? 'Editor' : 'Hide';
	const editorCN = classnames('editor', {
		'editor--hidden': isHidden,
	});

	const test = () => {
		postScreen(currentScreen, screenContent);
	};

	return (
		<ParserProvider value={isHidden ? defaultParser : editorParser}>
			<OverlayProvider>
				<div className="wrapper">
					<button
						className="toggle-editor-btn"
						onClick={() => setIsHidden(!isHidden)}
					>
						{btnText}
					</button>
					<div className={editorCN}>
						<div>Current Screen: {currentScreen}</div>
						<button onClick={test}>Save</button>
					</div>
					<App />
				</div>
			</OverlayProvider>
		</ParserProvider>
	);
};

export default Editor;
