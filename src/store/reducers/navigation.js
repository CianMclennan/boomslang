import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'navigation',
    initialState: {
        screens: [],
        current_screen: '',
        transition_direction: '',
    },
    reducers: {
        screenAdded: (navigation, action) => {
            navigation.screens.push({
                id: lastId++,
                name: action.payload.name,
            });
        },
        setCurrentScreen: (navigation, action) => {
            navigation.current_screen = action.payload.screen;
            navigation.transition_direction = action.payload.direction;
        },
        gotoNextScreen: (navigation, action) => {
            const nextScreen =
                navigation.nextScreen || navigation.current_screen;
        },
        gotoPrevScreen: (navigation, action) => {
            const prevScreen =
                navigation.prevScreen || navigation.current_screen;
        },
    },
});

export const { screenAdded, setCurrentScreen } = slice.actions;

export default slice.reducer;
