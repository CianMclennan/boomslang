import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { nextScreen, prevScreen } from '../store/reducers/navigation'

const FooterStyled = styled.footer({
    backgroundColor: "#333"
});
const NavButtons = styled.div`
    display: flex;
    flex-flow: row-reverse;
    height: 100%;
`
const Footer = () => {
    const dispatch = useDispatch();
    
    return ( 
        <FooterStyled>
            <NavButtons>
                <button onClick={() => dispatch(nextScreen())}>Next</button>
                <button onClick={() => dispatch(prevScreen())}>Prev</button>
            </NavButtons>
        </FooterStyled>
    )
};
export default Footer;