import { combineReducers } from 'redux';
import navigation from './reducers/navigation';
import settings from './reducers/settings';
import screens from './reducers/screens';

export default combineReducers({
    screens,
    settings,
    navigation,
});
