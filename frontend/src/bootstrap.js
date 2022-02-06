import configureStore from 'src/store/configureStore.js';
import screens from 'src/structure.js';
import {
	allScreensAdded,
	currentScreenSet,
} from 'src/store/reducers/navigation.js';

const store = configureStore();
const { getState, dispatch } = store;
const {
	settings: { start_screen },
} = getState();

dispatch(allScreensAdded(screens));
dispatch(currentScreenSet({ screen: start_screen }));

export default store;
