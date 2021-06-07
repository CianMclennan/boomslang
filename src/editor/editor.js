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
const { title, start_screen: screen } = store.getState().settings;

store.dispatch(currentScreenSet({ screen }));

document.title = title;
window.ReactDOM = ReactDOM;
ReactDOM.render(
	<Provider store={store}>
		<Editor />
	</Provider>,
	document.getElementById('root')
);
