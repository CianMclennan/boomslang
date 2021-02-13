import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { screenAdded, currentScreenSet } from '../store/reducers/navigation';

import structure from '../structure';

import Editor from './Editor.jsx';
// import editorConnection from './editor_connect';

const store = configureStore();
structure.map((screen) => store.dispatch(screenAdded({ name: screen })));
const {
    course_ID,
    title,
    editor_url,
    start_screen,
} = store.getState().settings;

store.dispatch(currentScreenSet({ screen: start_screen }));

document.title = title;

// const connection = editorConnection(editor_url, course_ID);
// window.ws = connection;

ReactDOM.render(
    <Provider store={store}>
        <Editor />
    </Provider>,
    document.getElementById('root')
);
