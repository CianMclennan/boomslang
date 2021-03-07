import React from 'react';
import Accordian from 'src/components/Accordian/Accordian.jsx'

export default () => {
    const data = [
        {title: "title", content: "content"},
        {title: "title", content: "content"},
        {title: "title", content: "content"},
        {title: "title", content: "content"},
        {title: "title", content: "content"}
    ];
    return <Accordian data={data}/>
}