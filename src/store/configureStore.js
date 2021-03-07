import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer.js';

export default function () {
	return configureStore({
		reducer,
		middleware: [...getDefaultMiddleware()],
	});
}
