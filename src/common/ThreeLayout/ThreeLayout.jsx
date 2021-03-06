import React, { useState } from 'react';
import './three-layout.scss'

const LayoutHorizontal = ({sections = [], seperation = []}) => {
    const inlineStyle = {
        gridTemplateColumns: seperation.join(' '),
    }
    
    return <div className="layout-horizontal" style={inlineStyle}>
        {sections}
    </div>
}

export default LayoutHorizontal;