import './new-screen-editor.scss';
import React, { useState } from 'react';

const NewScreenEditor = () => {
	const [screenName, setScreenName] = useState('');
	const handleScreenNameChange = ({ target: { value } }) => {
		setScreenName(value);
	};
	const handleSubmit = () => {
		// eslint-disable-next-line no-console
		console.log('Screen Name:', screenName.split(' ').join('_'));
	};
	return (
		<div className="new-screen-editor">
			Screen Name:
			<input
				className="new-screen-editor__screen-name-field"
				type="text"
				value={screenName}
				onChange={handleScreenNameChange}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default NewScreenEditor;
