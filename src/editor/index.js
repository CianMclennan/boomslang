import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { screenAdded } from '../store/reducers/screens';

import Editor from './Editor.jsx';

const store = configureStore();
store.dispatch(screenAdded({ name: 'screen_1' }));

document.title = store.getState().settings.title;

ReactDOM.render(
    <Provider store={store}>
        <Editor />
    </Provider>,
    document.getElementById('root')
);
