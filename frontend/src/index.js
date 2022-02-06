import App from './App.jsx';
import OverlayProvider from 'src/navigation/OverlayProvider.jsx';
import ParserProvider from 'src/screenBuilder/ParserProvider.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import defaultParser from 'src/screenBuilder/defaultParser.js';
import store from './bootstrap.js';

ReactDOM.render(
	<ReduxProvider store={store}>
		<ParserProvider value={defaultParser}>
			<OverlayProvider>
				<App />
			</OverlayProvider>
		</ParserProvider>
	</ReduxProvider>,
	document.getElementById('root')
);
