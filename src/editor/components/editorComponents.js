import React from 'react';
import components from 'src/components/components.js';

const Placeholder = React.lazy(() => import('./Placeholder/Placeholder.jsx'));
const TextEditor = React.lazy(() => import('./TextEditor/TextEditor.jsx'));
const AccordianEditor = React.lazy(() =>
	import('./AccordianEditor/AccordianEditor.jsx')
);
export default {
	...components,
	TextEditor,
	AccordianEditor,
	Placeholder,
};
