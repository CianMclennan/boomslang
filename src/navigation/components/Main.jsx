import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap'
import { useSelector } from 'react-redux';
import screens from 'src/screens/screens.js';

let animationSpeed = 0;
let isScreen1 = true;
let screenDisplayed = "";
let shouldAnimate = false;
let animationDirection = "";

const Navigation = () => {
    const screen1 = useRef();
    const screen2 = useRef();
    const [screen1Content, updateScreen1] = useState(<></>);
    const [screen2Content, updateScreen2] = useState(<></>);

    const rightToLeft = () => {
        gsap.fromTo(screen1.current, {left: isScreen1 ? "0%": "100%"}, {left: isScreen1 ? "-100%" : "0%", duration: animationSpeed});
        gsap.fromTo(screen2.current, {left: isScreen1 ? "100%" : "0%"}, {left: isScreen1 ? "0%" : "-100%", duration: animationSpeed});
    }
    const leftToRight = () => {
        gsap.fromTo(screen1.current, {left: isScreen1 ? "0%" : "-100%"}, {left: isScreen1 ? "100%" : "0%", duration: animationSpeed});
        gsap.fromTo(screen2.current, {left: isScreen1 ? "-100%" : "0%"}, {left: isScreen1 ? "0%" : "100%", duration: animationSpeed});
    }

    // listening for 'current_screen' to be updated
    useSelector(state => {
        const screenID = state.navigation.current_screen;
        if (!screenID || screenID === screenDisplayed) return;
        
        screenDisplayed = screenID;
        animationSpeed = state.settings.screen_transition_speed || 0;
        animationDirection = state.navigation.transition_direction || "";
        shouldAnimate =  state.settings.screen_transition && animationSpeed > 0 && animationDirection.length;
        
        let updateScreen = () => {throw new Error("'updateScreen' is unset.")};
        if (isScreen1) {
            updateScreen = shouldAnimate ? updateScreen2 : updateScreen1;
        } else {
            updateScreen = shouldAnimate ? updateScreen1 : updateScreen2;
        }

        updateScreen(screens[screenID]);
    });
    
    useEffect(() => {
        if (shouldAnimate) {
            if(animationDirection === "rtl"){
                rightToLeft();
                isScreen1 = !isScreen1;
            } else if (animationDirection === "ltr"){
                leftToRight();
                isScreen1 = !isScreen1;
            }
            shouldAnimate = false;
        }
    });

    return (
    <div className="slider">
        <main className="slider__screen" ref={screen1} aria-hidden={!isScreen1}>
            {screen1Content}
        </main>
        <main className="slider__screen slider__screen--offscreen" ref={screen2} aria-hidden={isScreen1}>
            {screen2Content}
        </main>
    </div>
    );
};

export default Navigation;