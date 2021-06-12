import App from './App.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'src/store/configureStore.js';
const store = configureStore();

ReactDOM.render(
	<OverlayProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</OverlayProvider>,
	document.getElementById('root')
);
