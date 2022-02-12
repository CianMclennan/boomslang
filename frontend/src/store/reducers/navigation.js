import { NavigationRules } from 'src/structure.js';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'navigation',
	initialState: {
		screens: [],
		current_screen: '',
		transition_direction: '',
		screen_content: {},
		invalid_screen_content: [],
	},
	reducers: {
		allScreensAdded: (navigation, { payload: screens }) => {
			navigation.screens = screens;
		},
		screenAdded: (navigation, { payload: screenName }) => {
			navigation.screens.push(screenName);
		},
		currentScreenSet: (navigation, { payload: { screen, direction } }) => {
			navigation.current_screen = screen;
			navigation.transition_direction = direction;
		},
		screenContentAdded: (navigation, { payload: { screenId, content } }) => {
			const index = navigation.invalid_screen_content.indexOf(screenId);
			if (index >= 0) {
				navigation.invalid_screen_content.splice(index, 1);
			}
			navigation.screen_content[screenId] = content;
		},
		contentUpdated: (navigation, { payload: { path, content } }) => {
			const pathArr = path.split('/');
			let reference = navigation.screen_content;
			while (pathArr.length > 1) {
				const pos = pathArr.shift();
				reference = reference[pos];
			}
			const [attr] = pathArr;
			reference[attr] = content;
		},
		screenContentInvalidated: (navigation, { payload: screenId }) => {
			if (!navigation.invalid_screen_content.includes(screenId)) {
				navigation.invalid_screen_content.push(screenId);
			}
		},
		nextScreen: (navigation) => {
			const { screens, current_screen } = navigation;
			const rule = NavigationRules[current_screen];
			const goNext = (screen) => {
				navigation.current_screen = screen;
				navigation.transition_direction = 'rtl';
			};

			if (rule?.next) {
				goNext(rule.next);
			} else {
				let index = screens.indexOf(current_screen);
				if (index === -1) return;
				// to prevent going above the max number of screens.
				if (++index < screens.length) {
					goNext(screens[index]);
				}
			}
		},
		prevScreen: (navigation) => {
			const { screens, current_screen } = navigation;
			const rule = NavigationRules[current_screen];
			const goPrev = (screen) => {
				navigation.current_screen = screen;
				navigation.transition_direction = 'ltr';
			};

			if (rule?.prev) {
				goPrev(rule.prev);
			} else {
				let index = screens.indexOf(current_screen);
				if (index === -1) return;
				// to prevent going bellow index 0.
				if (--index >= 0) {
					goPrev(screens[index]);
				}
			}
		},
	},
});

export const {
	allScreensAdded,
	screenAdded,
	currentScreenSet,
	screenContentAdded,
	screenContentInvalidated,
	contentUpdated,
	nextScreen,
	prevScreen,
} = slice.actions;

export default slice.reducer;
