import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../store/configureStore';
import { screenAdded } from '../store/screens';

import Editor from './Editor.jsx';

const store = configureStore();
store.dispatch(screenAdded({ name: 'screen' }));

ReactDOM.render(<Editor />, document.getElementById('root'));
