import './editor.scss';
import App from 'src/App.jsx';
import React, { useState } from 'react';

const Editor = () => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<div className={`wrapper ${isHidden ? 'wrapper--hidden' : ''}`}>
			<div className="editor">
				<button
					className="editor__toggle-btn"
					onClick={() => setIsHidden(!isHidden)}
				>
					{isHidden ? 'Editor' : 'Hide'}
				</button>
				<button>Hello World</button>
			</div>
			<App />
		</div>
	);
};

export default Editor;
