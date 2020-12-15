import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation.jsx';

import { setCurrentScreen } from '../store/reducers/navigation'

const Wrapper = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-rows: ${props => `
        ${props.header ? "80px " : ""} 
        1fr 
        ${props.footer ? " 80px" : ""}
    `};
`
const Header = styled.header({
    backgroundColor: "#333"
});
const Footer = styled.footer({
    backgroundColor: "#333"
});

let currentScreen = 0

const Main = () => {
    const [header, showHeader] = useState(true);
    const [footer, showFooter] = useState(true);
    const dispatch = useDispatch();

    const goBackward = () => {
        dispatch(setCurrentScreen({
            current_screen: `screen_${--currentScreen}`,
            transition_direction: "ltr"
        }));
    }
    const goForward = () => {
        dispatch(setCurrentScreen({
            current_screen: `screen_${++currentScreen}`,
            transition_direction: "rtl"
        }));
    }
    return ( 
        <Wrapper header={header} footer={footer}>
            {header && <Header />}
            <Navigation />
            {footer && 
                <Footer>
                    <button onClick={goBackward}>goPrev</button>
                    <button onClick={goForward}>goNext</button>
                </Footer>}
        </Wrapper>
    )
};
export default Main;