import React, { useState } from 'react';
import styled from 'styled-components';
import Loader from './screenLoader'

const Slider = styled.div`   
height: 100%;
align-content: center;
text-align: center;
display: grid;
`;

const loader = new Loader();
loader.load();

export default () => {

    return <Slider>Slider</Slider>
};