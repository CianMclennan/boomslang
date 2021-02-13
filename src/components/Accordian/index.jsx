import React from 'react';
import styled from 'styled-components';

const Accordian = styled.div`
    min-height: 100px;
    & .title-bar {
        background-color: sandybrown;
        padding: 5px;
        font-size: 1.2em;
    }
    & .content {
        background-color: pink;
    }
`;


export default (props) => {
    const content = (props.data || []).map((section, index) => {
        return <div key={index} className="section">
            <div className="title-bar">
                {section.title}
            </div>
            <div className="content">
                {section.content}
            </div>
        </div>
    });

    return <Accordian>
        {content}
    </Accordian>
}