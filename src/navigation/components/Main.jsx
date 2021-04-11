import Screen from './Screen.jsx';
import { fetchScreen } from 'src/screenBuilder/fetchScreen.js';
import gsap from 'gsap';
import isUndefined from 'lodash/isUndefined';
import { screenContentAdded } from 'src/store/reducers/navigation.js';
import React, { useEffect, useRef, useState } from 'react';
import { SCREEN, SCREEN_SECOND, SLIDER } from '../constants.js';
import { useDispatch, useSelector } from 'react-redux';

let animationSpeed = 0;
let isScreen1 = true;
let screenDisplayed = '';
let shouldAnimate = false;
let animationDirection = '';

const Main = () => {
	const dispatch = useDispatch();
	const screen1 = useRef();
	const screen2 = useRef();
	const [screen1Content, updateScreen1] = useState('');
	const [screen2Content, updateScreen2] = useState('');
	const [pendingRequests, updatePendingRequests] = useState([]);

	const rightToLeft = () => {
		gsap.fromTo(
			screen1.current,
			{ left: isScreen1 ? '0%' : '100%' },
			{ left: isScreen1 ? '-100%' : '0%', duration: animationSpeed }
		);
		gsap.fromTo(
			screen2.current,
			{ left: isScreen1 ? '100%' : '0%' },
			{ left: isScreen1 ? '0%' : '-100%', duration: animationSpeed }
		);
	};
	const leftToRight = () => {
		gsap.fromTo(
			screen1.current,
			{ left: isScreen1 ? '0%' : '-100%' },
			{ left: isScreen1 ? '100%' : '0%', duration: animationSpeed }
		);
		gsap.fromTo(
			screen2.current,
			{ left: isScreen1 ? '-100%' : '0%' },
			{ left: isScreen1 ? '0%' : '100%', duration: animationSpeed }
		);
	};

	// listening for 'current_screen' to be updated
	useSelector(({ navigation, settings }) => {
		const {
			screen_content: content,
			current_screen: screenId,
			transition_direction: direction,
		} = navigation;
		const {
			screen_transition: shouldTransition,
			screen_transition_speed: transitionSpeed,
		} = settings;

		if (!screenId || screenId === screenDisplayed) return;
		animationSpeed = transitionSpeed || 0;
		animationDirection = direction || '';
		shouldAnimate = Boolean(
			shouldTransition && animationSpeed > 0 && animationDirection.length
		);

		let updateScreen = () => {
			throw new Error('\'updateScreen\' is unset.');
		};
		if (isScreen1) {
			updateScreen = shouldAnimate ? updateScreen2 : updateScreen1;
		} else {
			updateScreen = shouldAnimate ? updateScreen1 : updateScreen2;
		}

		const contentLoaded = !isUndefined(content[screenId]);
		const requestIsPending = pendingRequests.includes(screenId);
		if (!requestIsPending && !contentLoaded) {
			updatePendingRequests([...pendingRequests, screenId]);
			fetchScreen(screenId).then((content) => {
				updateScreen(screenId);
				screenDisplayed = screenId;
				dispatch(screenContentAdded({ screenId, content }));
			});
		}
	});

	useEffect(() => {
		if (shouldAnimate) {
			if (animationDirection === 'rtl') {
				rightToLeft();
				isScreen1 = !isScreen1;
			} else if (animationDirection === 'ltr') {
				leftToRight();
				isScreen1 = !isScreen1;
			}
			shouldAnimate = false;
		}
	});

	return (
		<div className={SLIDER}>
			<Screen
				screenId={screen1Content}
				className={SCREEN}
				ref={screen1}
				aria-hidden={!isScreen1}
			/>
			<Screen
				screenId={screen2Content}
				className={SCREEN_SECOND}
				ref={screen2}
				aria-hidden={isScreen1}
			/>
		</div>
	);
};

export default Main;
