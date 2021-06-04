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
const { start_screen: screen } = store.getState().settings;

store.dispatch(currentScreenSet({ screen }));

const userAgentInterator = navigator.userAgent.matchAll(/\s(\w+)\/\d+/g);
const userAgentIds = [];
let reading = true;
while (reading) {
	const { value, done } = userAgentInterator.next();
	if (done) break;
	const [, id] = value;
	userAgentIds.push(id);
}
// eslint-disable-next-line no-console
console.log(userAgentIds);

document.title = userAgentIds;
window.ReactDOM = ReactDOM;
ReactDOM.render(
	<Provider store={store}>
		<Editor />
	</Provider>,
	document.getElementById('root')
);
