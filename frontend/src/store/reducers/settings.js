import { createSlice } from '@reduxjs/toolkit';
import settings from 'src/settings.js';

const slice = createSlice({
	name: 'settings',
	initialState: settings,
	reducers: {
		settingsUpdated: (settings, action) => {
			Object.keys(action.payload).forEach(
				(key) => (settings[key] = action.payload[key])
			);
		},
		titleUpdated: (settings, { payload: title = '' }) => {
			settings.title = title;
		},
		maintenanceMessageDisplayed: (
			settings,
			{ payload: showMessage = true }
		) => {
			settings.show_maintenance_message = showMessage;
		},
	},
});

export const { settingsUpdated, titleUpdated, maintenanceMessageDisplayed } =
	slice.actions;

export default slice.reducer;
