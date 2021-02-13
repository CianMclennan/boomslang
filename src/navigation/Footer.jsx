import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setCurrentScreen } from '../store/reducers/navigation'

const FooterStyled = styled.footer({
    backgroundColor: "#333"
});
const NavButtons = styled.div`
    display: flex;
    flex-flow: row-reverse;
    height: 100%;
`

// this can be remove once screen builder is implemented.
let currentScreen = 0;

const Footer = () => {
    const dispatch = useDispatch();

    const goBackward = () => {
        dispatch(setCurrentScreen({
            screen: `screen_${--currentScreen}`,
            direction: "ltr"
        }));
    }
    const goForward = () => {
        dispatch(setCurrentScreen({
            screen: `screen_${++currentScreen}`,
            direction: "rtl"
        }));
    }
    return ( 
        <FooterStyled>
            <NavButtons>
                <button onClick={goForward}>Next</button>
                <button onClick={goBackward}>Prev</button>
            </NavButtons>
        </FooterStyled>
    )
};
export default Footer;