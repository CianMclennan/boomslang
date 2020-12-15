import settings from '../../settings';

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'settings',
    initialState: settings,
    reducers: {
        updateSettings: (settings, action) => {
            Object.keys(action.payload).forEach(
                (key) => (settings[key] = action.payload[key])
            );
        },
    },
});

export const { updateSettings } = slice.actions;

export default slice.reducer;
