import { combineReducers } from 'redux';
import navigation from './reducers/navigation.js';
import settings from './reducers/settings.js';

export default combineReducers({
	settings,
	navigation,
});
