import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { screenAdded } from '../store/reducers/screens';

import Editor from './Editor.jsx';
import editorConnection from './editor_connect';

const store = configureStore();
store.dispatch(screenAdded({ name: 'screen_1' }));
const settings = store.getState().settings;
const { course_ID, title, editor_url } = settings;
document.title = title;

// const connection = editorConnection(editor_url, course_ID);
// window.ws = connection;

ReactDOM.render(
    <Provider store={store}>
        <Editor />
    </Provider>,
    document.getElementById('root')
);
