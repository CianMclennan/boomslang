import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'navigation',
    initialState: {
        current_screen: '',
        transition_direction: '',
    },
    reducers: {
        setCurrentScreen: (navigation, action) => {
            Object.keys(action.payload).forEach(
                (key) => (navigation[key] = action.payload[key])
            );
        },
    },
});

export const { setCurrentScreen } = slice.actions;

export default slice.reducer;
