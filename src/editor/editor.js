import Editor from './Editor.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'src/store/configureStore.js';
import structure from 'src/structure.js';
import {
	currentScreenSet,
	screenAdded,
} from 'src/store/reducers/navigation.js';

const store = configureStore();
structure.map((screen) => store.dispatch(screenAdded({ name: screen })));
const { start_screen: screen, title } = store.getState().settings;

store.dispatch(currentScreenSet({ screen }));

document.title = title;
ReactDOM.render(
	<Provider store={store}>
		<Editor />
	</Provider>,
	document.getElementById('root')
);
