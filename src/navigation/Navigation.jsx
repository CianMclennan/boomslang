import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentScreen } from '../store/reducers/navigation'

const UNSET = 0;
const CENTRE = 1;
const RIGHT = 2;
const LEFT = 3;

const Slider = styled.div({
    height: "100%",
});
const Screen = styled.div`
    position: relative;
    height: 100%;
    will-change: left;
    &.second {
        left: 100%;
        top: -100%;
    }
    
    background-color: sandybrown;
    align-content: center;
    text-align: center;
    display: grid;
`;


const animationSpeed = 0.3;
let isScreen1 = true;
let screenDisplayed = "";

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
        const animationDirection = state.navigation.transition_direction;
        if (screen !== screenDisplayed){
            const updateScreen = 
                !isScreen1 && animationDirection.length || 
                isScreen1 && !animationDirection.length ?
                updateScreen1 :
                updateScreen2;
                
            updateScreen(<div>{screen}</div>);

            if(animationDirection === "rtl"){
                rightToLeft();
                isScreen1 = !isScreen1;
            } else if (animationDirection === "ltr"){
                leftToRight();
                isScreen1 = !isScreen1;
            }
        }
        screenDisplayed = screen;
        return screen;
    });

    if(screenDisplayed === "") {
        dispatch(setCurrentScreen({current_screen: "screen_0"}));
    }

    return (<Slider>
        <Screen ref={screen1}>
            {screen1Content}
        </Screen>
        <Screen ref={screen2} className="second">
            {screen2Content}
        </Screen>
    </Slider>);
};

export default Navigation;