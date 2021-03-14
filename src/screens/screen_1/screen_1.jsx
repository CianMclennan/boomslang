import Accordian from 'src/components/Accordian/Accordian.jsx';
import React from 'react';

export default () => {
	const data = [
		{ title: 'title', content: 'content' },
		{ title: 'title', content: 'content' },
		{ title: 'title', content: 'content' },
		{ title: 'title', content: 'content' },
		{ title: 'title', content: 'content' },
	];
	return <Accordian data={data} />;
};
