import React, { useState } from 'react';
import App from 'src/App.jsx';
import './editor.scss';

const Editor = (props) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className={`wrapper ${isHidden ? 'wrapper--hidden' : ''}`}>
            <div className="editor">
                <button className="editor__toggle-btn" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? 'Editor' : 'Hide'}
                </button>
                <button onClick={() => console.log("click")}>Hello World</button>
            </div>
            <App />
        </div>
    );
};

export default Editor;
