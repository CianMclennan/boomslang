import React, { useState } from 'react';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx'
import './navigation.scss'

const Navigation = () => {
    const [header, showHeader] = useState(true);
    const [footer, showFooter] = useState(true);

    const inlineStyle = {
        gridTemplateRows: `${header && '80px'} 1fr ${footer && '80px'}`,
    }

    return ( 
        <div className="navigation" style={inlineStyle}>
            {header && <header className="navigation__header" />}
            <Main />
            {footer && <Footer/>}
        </div>
    )
};
export default Navigation;