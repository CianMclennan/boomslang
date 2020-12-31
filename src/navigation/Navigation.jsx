import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentScreen } from '../store/reducers/navigation'

const Slider = styled.div`
    height: 100%;
    overflow: hidden;
    background-color: sandybrown;
`;
const Screen = styled.main`
    position: relative;
    height: 100%;
    will-change: left;
    overflow: auto;

    &.second {
        left: 100%;
        top: -100%;
    }
`;

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
    const dispatch = useDispatch();

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
        const screen = state.navigation.current_screen;
        if (screen === screenDisplayed) return;
        
        screenDisplayed = screen;
        animationSpeed = state.settings.screen_transition_speed || 0;
        animationDirection = state.navigation.transition_direction;
        shouldAnimate =  state.settings.screen_transition && animationSpeed > 0 && animationDirection.length;
        
        let updateScreen = () => {throw new Error("'updateScreen' is unset.")};
        if (isScreen1) {
            updateScreen = shouldAnimate ? updateScreen2 : updateScreen1;
        } else {
            updateScreen = shouldAnimate ? updateScreen1 : updateScreen2;
        }

        updateScreen(<div>{screen}</div>);
        return screen;
    });

    // first load.
    useEffect(() => dispatch(setCurrentScreen({current_screen: "screen_0"})), []);
    
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
    <Slider>
        <Screen ref={screen1} aria-hidden={!isScreen1}>
            {screen1Content}
        </Screen>
        <Screen ref={screen2} aria-hidden={isScreen1} className="second">
            {screen2Content}
        </Screen>
    </Slider>
    );
};

export default Navigation;