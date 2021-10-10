import Screen from './Screen.jsx';
import { fetchScreen } from 'src/screenBuilder/httpInterface.js';
import isUndefined from 'lodash/isUndefined';
import { updateSettings } from 'src/store/reducers/settings.js';
import React, { useEffect, useState } from 'react';
import { SCREEN, SLIDER } from '../constants.js';
import {
	screenContentAdded,
	screenContentInvalidated,
} from 'src/store/reducers/navigation.js';
import { useDispatch, useSelector } from 'react-redux';

let isScreen1 = true;

const Main = () => {
	const dispatch = useDispatch();
	const [sentRequests, updateSentRequests] = useState([]);
	const [screenId, invalidScreens] = useSelector(
		({ navigation: { current_screen, invalid_screen_content } }) => [
			current_screen,
			invalid_screen_content,
		]
	);
	const contentIsInvalid = invalidScreens.includes(screenId);
	const requestIsSent = sentRequests.includes(screenId);
	const contentIsLoaded = useSelector(
		({ navigation: { screen_content: content } }) =>
			screenId.length === 0 ||
			(!isUndefined(content[screenId]) && !invalidScreens.includes(screenId))
	);

	useEffect(() => {
		if ((!contentIsLoaded || contentIsInvalid) && !requestIsSent) {
			const newSentRequests = [...sentRequests, screenId];
			// eslint-disable-next-line no-console
			console.log('PendingRequests', newSentRequests);
			updateSentRequests(newSentRequests);
			fetchScreen(screenId).then((response) => {
				const { ok, content, error, status } = response;
				if (ok) {
					dispatch(screenContentAdded({ screenId, content }));
				} else {
					console.error('Error:', error);
					switch (status) {
					case 404:
						dispatch(
							screenContentAdded({
								screenId,
								content: `404: Content was not found for ${screenId}`,
							})
						);
						dispatch(screenContentInvalidated({ screenId }));
						break;

					default:
						dispatch(updateSettings({ show_maintenance_message: true }));
						break;
					}
				}
				updateSentRequests((requests) => {
					const index = requests.indexOf(screenId);
					if (index >= 0) {
						requests.splice(index, 1);
					}
					return requests;
				});
			});
		}
	}, [screenId]);

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
