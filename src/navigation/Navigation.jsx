import React, { useState } from 'react';
import styled from 'styled-components';

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
    display: grid;
    align-content: center;
    background-color: aquamarine;
    left: ${props => {
        switch (props.position) {
            case LEFT:
                return "-100%"
            case RIGHT:
                return "100%"
            case CENTRE:
                return "0%"
            default:
                return "";
        }
    }};
    transition: left 0.5s ease;
    will-change: left;

    &.second {
        top: -100%;
        background-color: lightblue;
    }
`;

const Navigation = () => {
    const [screenPos, setScreenPos] = useState({screen1: CENTRE, screen2: RIGHT});

    const goNext = () => {
        if (screenPos.screen1 === CENTRE) {
            if(screenPos.screen2 === RIGHT){
                setScreenPos({screen1: LEFT, screen2: CENTRE});
            }
        } 
        // screen2 is centre    
        else if(screenPos.screen1 === RIGHT){
            setScreenPos({screen1: CENTRE, screen2: LEFT});
        }
    }
    const goBack = () => {
        // setScreenPos({screen1: "CENTRE", screen2: "right"});
    }

    return (<Slider>
        <Screen position={screenPos.screen1}>
            <button onClick={goNext}>goNext</button>
            <button onClick={goBack}>goBack</button>
        </Screen>
        <Screen position={screenPos.screen2} className="second">
            <button onClick={goNext}>goNext</button>
            <button onClick={goBack}>goBack</button>
        </Screen>
    </Slider>);
};

export default Navigation;