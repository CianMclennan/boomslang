import './navigation.scss';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import { HEADER, NAVIGATION } from './constants.js';
import React, { useState } from 'react';

const Navigation = () => {
	const [header] = useState(true);
	const [footer] = useState(true);

	const inlineStyle = {
		gridTemplateRows: `${header && '80px'} 1fr ${footer && '80px'}`,
	};

	return (
		<div className={NAVIGATION} style={inlineStyle}>
			{header && <header className={HEADER} />}
			<Main />
			{footer && <Footer />}
		</div>
	);
};
export default Navigation;
