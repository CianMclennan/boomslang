import './editor.scss';
import App from 'src/App.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import classnames from 'classnames';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import editorParser from 'src/screenBuilder/editorParser.js';
import { postScreen } from 'src/screenBuilder/httpInterface.js';
import { useSelector } from 'react-redux';
import React, { Suspense, useState } from 'react';
const MaintenanceScreen = React.lazy(() => import('./MaintenanceScreen'));

export const EDITOR = 'editor';
export const EDITOR_HIDDEN = `${EDITOR} ${EDITOR}--hidden`;

const Editor = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [currentScreen, screenContent] = useSelector(({ navigation }) => {
		const { current_screen: screen, screen_content: content } = navigation;
		return [screen, content[screen]];
	});
	const shouldShowMaintenance = useSelector(
		({ settings: { show_maintenance_message = false } }) =>
			show_maintenance_message
	);

	const btnText = isHidden ? 'Editor' : 'Hide';
	const editorCN = classnames('editor', {
		'editor--hidden': isHidden,
	});

	const test = () => {
		postScreen(currentScreen, screenContent);
	};

	return shouldShowMaintenance ? (
		<Suspense fallback={<></>}>
			<MaintenanceScreen />
		</Suspense>
	) : (
		<ParserProvider value={isHidden ? defaultParser : editorParser}>
			<OverlayProvider>
				<div className="wrapper">
					<button
						className="editor__button editor__button__toggle"
						onClick={() => setIsHidden(!isHidden)}
					>
						{btnText}
					</button>
					<div className={editorCN}>
						<div>Current Screen: {currentScreen}</div>
						<button className="editor__button" onClick={test}>
							Save
						</button>
					</div>
					<App />
				</div>
			</OverlayProvider>
		</ParserProvider>
	);
};

export default Editor;
