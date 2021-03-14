import { NavigationRules } from 'src/structure.js';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'navigation',
	initialState: {
		screens: [],
		current_screen: '',
		transition_direction: '',
		screen_content: {},
	},
	reducers: {
		screenAdded: (navigation, { payload: { name } }) => {
			navigation.screens.push(name);
		},
		currentScreenSet: (navigation, { payload: { screen, direction } }) => {
			navigation.current_screen = screen;
			navigation.transition_direction = direction;
		},
		screenContentAdded: (navigation, { payload: { screenId, content } }) => {
			navigation.screen_content[screenId] = content;
		},
		nextScreen: (navigation) => {
			const { screens, current_screen } = navigation;
			const rule = NavigationRules[current_screen];
			const goNext = (screen) => {
				navigation.current_screen = screen;
				navigation.transition_direction = 'rtl';
			};

			if (rule && rule.next) {
				goNext(rule.next);
			} else {
				let index = screens.indexOf(current_screen);
				if (index === -1 || !screens.length) return;
				if (++index < screens.length) {
					goNext(screens[index]);
				}
			}
		},
		prevScreen: (navigation) => {
			const { screens, current_screen } = navigation;
			const rule = NavigationRules[current_screen];
			const goNext = (screen) => {
				navigation.current_screen = screen;
				navigation.transition_direction = 'ltr';
			};

			if (rule && rule.prev) {
				goNext(rule.prev);
			} else {
				let index = screens.indexOf(current_screen);
				if (index === -1 || !screens.length) return;
				if (--index >= 0) {
					goNext(screens[index]);
				}
			}
		},
	},
});

export const {
	screenAdded,
	screenContentAdded,
	currentScreenSet,
	nextScreen,
	prevScreen,
} = slice.actions;

export default slice.reducer;
