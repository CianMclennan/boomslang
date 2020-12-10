import { combineReducers } from 'redux';
import screensReducer from './screens';

export default combineReducers({
    screens: screensReducer,
});
