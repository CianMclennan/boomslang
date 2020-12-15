import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'screens',
    initialState: [],
    reducers: {
        screenAdded: (screens, action) => {
            screens.push({
                id: lastId++,
                name: action.payload.name,
            });
        },
    },
});

export const { screenAdded } = slice.actions;

export default slice.reducer;
