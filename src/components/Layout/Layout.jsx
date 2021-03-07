import React from 'react';
import parse from 'src/parser/parser.js'

const Layout = ({child, style}) => {
    if (!child) {
        throw new Error("child does not exist in Layout component");
    }
    return <div style={style}>
        {parse(child)}
    </div>;
}

export default Layout;
