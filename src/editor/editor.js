import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'src/store/configureStore.js';
import {
	screenAdded,
	currentScreenSet,
} from 'src/store/reducers/navigation.js';
import structure from 'src/structure.js';
import Editor from './Editor.jsx';

const store = configureStore();
structure.map((screen) => store.dispatch(screenAdded({ name: screen })));
const { start_screen, title } = store.getState().settings;

store.dispatch(currentScreenSet({ screen: start_screen }));

document.title = title;
ReactDOM.render(
	<Provider store={store}>
		<Editor />
	</Provider>,
	document.getElementById('root')
);
