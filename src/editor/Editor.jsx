import './editor.scss';
import App from 'src/App.jsx';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(true);
	const currentScreen = useSelector((state) => state.navigation.current_screen);

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
				<button>Edit screen</button>
			</div>
			<App />
		</div>
	);
};

export default Editor;
