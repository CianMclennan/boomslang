import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation.jsx';

const Wrapper = styled.div`
    display: grid;
    background-color: sandybrown;
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

const Main = () => {
    const [header, showHeader] = useState(true);
    const [footer, showFooter] = useState(true);
    return ( 
        <Wrapper header={header} footer={footer}>
            {header && <Header />}
            <Navigation />
            {footer && <Footer />}
        </Wrapper>
    )
};
export default Main;