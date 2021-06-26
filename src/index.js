import App from './App.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import store from './bootstrap.js';

ReactDOM.render(
	<ParserProvider value={defaultParser}>
		<OverlayProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</OverlayProvider>
	</ParserProvider>,
	document.getElementById('root')
);
