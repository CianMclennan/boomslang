import './navigation.scss';
import Footer from './components/Footer.jsx';
import Main from './components/SimpleMain.jsx';
import React, { useState } from 'react';

const Navigation = () => {
	const [header] = useState(true);
	const [footer] = useState(true);

	return (
		<div className="navigation">
			{header && <header className="navigation__header" />}
			<Main />
			{footer && <Footer />}
		</div>
	);
};

export default Navigation;
