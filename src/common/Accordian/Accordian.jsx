import React, { useState } from 'react';
import { ACCORDIAN, HEADER, CONTENT, CONTENT_HIDDEN } from './constants.js'
import './accordian.scss'

const Accordian = (props) => {
    const [selected, setSelected] = useState(0);    

    const handleHeaderClick = (index) => {
        const newIndex = index === selected ? -1 : index;
        setSelected(newIndex);
    }
    const content = (props.data || []).map(({title, content}, index) => {
        const isHidden = index !== selected;
        return <div key={index}>
            <div className={HEADER} onClick={()=>handleHeaderClick(index)}>
                {title}
            </div>
            <div className={`${CONTENT} ${isHidden && CONTENT_HIDDEN}`}>
                {content}
            </div>
        </div>
    });

    return <div className={ACCORDIAN}>
        {content}
    </div>
}

export default Accordian;