import './json-editor.scss';
import JSONInput from 'react-json-editor-ajrm';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const JsonEditor = ({ src }) => {
	const [json, setJson] = useState(src);
	const [wasUpdated, setWasUpdated] = useState(false);

	const handleFreeUpdate = ({ jsObject }) => {
		if (jsObject) {
			setJson(jsObject);
			!wasUpdated && setWasUpdated(true);
		}
	};
	return (
		<>
			<JSONInput
				locale="English"
				placeholder={json}
				reset={false}
				onChange={handleFreeUpdate}
				width="100%"
			/>
			{wasUpdated && <button onClick={() => {}}>Save</button>}
		</>
	);
};

JsonEditor.propTypes = {
	src: PropTypes.any.isRequired,
};

export default JsonEditor;
