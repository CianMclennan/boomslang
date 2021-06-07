/* eslint-disable no-unused-vars */
import Screen from './Screen.jsx';
import { fetchScreen } from 'src/screenBuilder/fetchScreen.js';
import gsap from 'gsap';
import isUndefined from 'lodash/isUndefined';
import { screenContentAdded } from 'src/store/reducers/navigation.js';
import React, { useEffect, useRef, useState } from 'react';
import { SCREEN, SCREEN_SECOND, SLIDER } from '../constants.js';
import { useDispatch, useSelector } from 'react-redux';

let isScreen1 = true;
let screenDisplayed = '';

const Main = () => {
	const dispatch = useDispatch();
	const [pendingRequests, updatePendingRequests] = useState([]);

	const screenId = useSelector((state) => state.navigation.current_screen);
	const requestIsPending = pendingRequests.includes(screenId);
	const contentIsLoaded = useSelector(
		({ navigation: { screen_content: content } }) =>
			screenId.length === 0 || !isUndefined(content[screenId])
	);

	if (!contentIsLoaded && !requestIsPending) {
		const newPendingRequests = [...pendingRequests, screenId];
		// eslint-disable-next-line no-console
		console.log('PendingRequests', newPendingRequests);
		updatePendingRequests(newPendingRequests);
		fetchScreen(screenId).then((content) => {
			dispatch(screenContentAdded({ screenId, content }));
		});
	}

	return (
		<div className={SLIDER}>
			<Screen
				key={screenId}
				screenId={screenId}
				className={SCREEN}
				aria-hidden={!isScreen1}
			/>
		</div>
	);
};

export default Main;
