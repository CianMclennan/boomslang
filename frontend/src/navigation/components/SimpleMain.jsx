import Screen from './Screen.jsx';
import { fetchScreen } from 'src/screenBuilder/http.js';
import { maintenanceMessageDisplayed } from 'src/store/reducers/settings.js';
import React, { useEffect, useState } from 'react';
import {
	screenContentAdded,
	screenContentInvalidated,
} from 'src/store/reducers/navigation.js';
import {
	selectCurrentScreen,
	selectInvalidScreens,
	selectScreenContent,
} from './utils.js';
import { useDispatch, useSelector } from 'react-redux';

let isScreen1 = true;

const Main = () => {
	const dispatch = useDispatch();
	const [sentRequests, updateSentRequests] = useState([]);
	const screenId = useSelector(selectCurrentScreen);
	const invalidScreens = useSelector(selectInvalidScreens);
	const screenContent = useSelector(selectScreenContent(screenId));

	const contentIsLoaded = Boolean(screenContent);
	const contentIsInvalid = invalidScreens.includes(screenId);
	const requestIsSent = sentRequests.includes(screenId);

	useEffect(() => {
		if (!requestIsSent && (!contentIsLoaded || contentIsInvalid)) {
			updateSentRequests([...sentRequests, screenId]);
			fetchScreen(screenId)
				.then((content) => {
					dispatch(screenContentAdded({ screenId, content }));
				})
				.catch((response) => {
					const { status } = response;
					switch (status) {
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
				})
				.finally(() => {
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
		<div className="slider">
			<Screen
				key={screenId}
				screenId={screenId}
				className="slider__screen"
				aria-hidden={!isScreen1}
			/>
		</div>
	);
};

export default Main;
