import { combineReducers } from 'redux';
import navigation from './reducers/navigation';
import settings from './reducers/settings';

export default combineReducers({
    settings,
    navigation,
});
