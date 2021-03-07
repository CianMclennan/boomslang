import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ACCORDIAN, HEADER, CONTENT, CONTENT_HIDDEN } from './constants.js'
import parse from 'src/parser/parser.js'
import './accordian.scss'

const Accordian = ({data}) => {
    const [selected, setSelected] = useState(0);    

    const handleHeaderClick = (index) => {
        const newIndex = index === selected ? -1 : index;
        setSelected(newIndex);
    }
    const content = (data || []).map(({title, content}, index) => {
        const isHidden = index !== selected;
        return <div key={index}>
            <div className={HEADER} onClick={()=>handleHeaderClick(index)}>
                {parse(title)}
            </div>
            <div className={`${isHidden ? CONTENT_HIDDEN : CONTENT}`}>
                {parse(content)}
            </div>
        </div>
    });

    return <div className={ACCORDIAN}>
        {content}
    </div>
}

export default Accordian;