import Screen from './Screen.jsx';
import { fetchScreen } from 'src/screenBuilder/httpInterface.js';
import isUndefined from 'lodash/isUndefined';
import { maintenanceMessageDisplayed } from 'src/store/reducers/settings.js';
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
	const [screenId, invalidScreens, contentIsLoaded] = useSelector(
		({
			navigation: {
				current_screen: screenId,
				invalid_screen_content: invalidScreens,
				screen_content,
			},
		}) => [
			screenId,
			invalidScreens,
			/* contentIsLoaded */
			!screenId.length || !isUndefined(screen_content[screenId]),
		]
	);
	const contentIsInvalid = invalidScreens.includes(screenId);
	const requestIsSent = sentRequests.includes(screenId);

	useEffect(() => {
		if ((!contentIsLoaded || contentIsInvalid) && !requestIsSent) {
			updateSentRequests([...sentRequests, screenId]);
			fetchScreen(screenId).then((response) => {
				const { ok, content, error, status } = response;
				updateSentRequests((requests) => {
					const index = requests.indexOf(screenId);
					if (index >= 0) {
						requests.splice(index, 1);
					}
					return requests;
				});
				if (ok) {
					dispatch(screenContentAdded({ screenId, content }));
				} else {
					console.error('Error:', error.name ?? error);
					switch (status) {
					case 503:
					case 404:
						dispatch(
							screenContentAdded({
								screenId,
								content: `404: Content was not found for ${screenId}`,
							})
						);
						dispatch(screenContentInvalidated(screenId));
						break;
					default:
						dispatch(maintenanceMessageDisplayed());
						dispatch(screenContentInvalidated(screenId));
						break;
					}
				}
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
