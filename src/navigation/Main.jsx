import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation.jsx';

const Wrapper = styled.div`
    display: grid;
    background-color: sandybrown;
    grid-template-rows: 80px 1fr 80px;
`
const Header = styled.header({
    backgroundColor: "#333"
});
const NavigationWrapper = styled.main``;
const Footer = styled.footer({
    backgroundColor: "#333"
});

const Main = () => (
    <Wrapper>
        <Header />
        <NavigationWrapper>
            <Navigation></Navigation>
        </NavigationWrapper>
        <Footer />
    </Wrapper>
);
export default Main;