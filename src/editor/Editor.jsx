import React, { useState } from 'react';
import styled from 'styled-components';
import App from '../App.jsx';

const Wrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: ${props => props.hidden ? "0px" : "100px"} 1fr;
`;

const EditorBar = styled.div`
    background-color: white;
    overflow: hidden;
`;
const ToggleBtn = styled.button`
    position: absolute;
    right: 0px;
`;

const TestBtn = styled.button`
`

const Editor = () => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <Wrapper hidden={isHidden}>
            <EditorBar>
                <ToggleBtn onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? 'Editor' : 'Hide'}
                </ToggleBtn>
                <TestBtn onClick={() => console.log("click")}>Hello World</TestBtn>
            </EditorBar>
            <App />
        </Wrapper>
    );
};

export default Editor;
