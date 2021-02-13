import { createSlice } from '@reduxjs/toolkit';
import { NavigationRules } from '../../structure.js';

const slice = createSlice({
    name: 'navigation',
    initialState: {
        screens: [],
        current_screen: '',
        transition_direction: '',
    },
    reducers: {
        screenAdded: (navigation, action) => {
            navigation.screens.push(action.payload.name);
        },
        currentScreenSet: (navigation, action) => {
            navigation.current_screen = action.payload.screen;
            navigation.transition_direction = action.payload.direction;
        },
        nextScreen: (navigation, action) => {
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
        prevScreen: (navigation, action) => {
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
    currentScreenSet,
    nextScreen,
    prevScreen,
} = slice.actions;

export default slice.reducer;
