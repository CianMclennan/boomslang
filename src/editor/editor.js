import Editor from './Editor.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'src/bootstrap.js';

ReactDOM.render(
	<Provider store={store}>
		<OverlayProvider>
			<Editor />
		</OverlayProvider>
	</Provider>,
	document.getElementById('root')
);
