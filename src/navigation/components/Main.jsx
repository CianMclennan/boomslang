import { fetchScreen } from 'src/parser/fetchScreen.js';
import gsap from 'gsap';
import { isUndefined } from 'lodash';
import parse from 'src/parser/parser.js';
import { screenContentAdded } from 'src/store/reducers/navigation.js';
import React, { useEffect, useRef, useState } from 'react';
import { SCREEN, SCREEN_SECOND, SLIDER } from '../constants.js';
import { useDispatch, useSelector } from 'react-redux';

let animationSpeed = 0;
let isScreen1 = true;
let screenDisplayed = '';
let shouldAnimate = false;
let animationDirection = '';

const Navigation = () => {
	const dispatch = useDispatch();
	const screen1 = useRef();
	const screen2 = useRef();
	const [screen1Content, updateScreen1] = useState(<></>);
	const [screen2Content, updateScreen2] = useState(<></>);

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
		if (isUndefined(content[screenId])) {
			fetchScreen(screenId).then((content) => {
				dispatch(screenContentAdded({ screenId, content }));
			});
		} else {
			updateScreen(parse(content[screenId]));
			screenDisplayed = screenId;
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
			<main className={SCREEN} ref={screen1} aria-hidden={!isScreen1}>
				{screen1Content}
			</main>
			<main className={SCREEN_SECOND} ref={screen2} aria-hidden={isScreen1}>
				{screen2Content}
			</main>
		</div>
	);
};

export default Navigation;
