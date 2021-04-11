import './navigation.scss';
import Footer from './components/Footer.jsx';
import Main from './components/SimpleMain.jsx';
import { HEADER, NAVIGATION } from './constants.js';
import React, { useState } from 'react';

const Navigation = () => {
	const [header] = useState(true);
	const [footer] = useState(true);

	return (
		<div className={NAVIGATION}>
			{header && <header className={HEADER} />}
			<Main />
			{footer && <Footer />}
		</div>
	);
};
export default Navigation;
