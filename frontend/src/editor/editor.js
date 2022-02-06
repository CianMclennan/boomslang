import Editor from './Editor.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'src/bootstrap.js';

ReactDOM.render(
	<ReduxProvider store={store}>
		<Editor />
	</ReduxProvider>,
	document.getElementById('root')
);
