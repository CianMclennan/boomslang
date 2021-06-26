import configureStore from 'src/store/configureStore.js';
import structure from 'src/structure.js';
import {
	currentScreenSet,
	screenAdded,
} from 'src/store/reducers/navigation.js';

const store = configureStore();
structure.map((screen) => store.dispatch(screenAdded({ name: screen })));
const { title, start_screen: screen } = store.getState().settings;

store.dispatch(currentScreenSet({ screen }));

document.title = title;

export default store;
