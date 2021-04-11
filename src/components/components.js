import React from 'react';
const Accordian = React.lazy(() => import('./Accordian/Accordian.jsx'));
const ThreeLayout = React.lazy(() => import('./ThreeLayout/ThreeLayout.jsx'));
const Text = React.lazy(() => import('./Text/Text.jsx'));
const Layout = React.lazy(() => import('./Layout/Layout.jsx'));
const Placeholder = React.lazy(() => import('./Placeholder/Placeholder.jsx'));

export default {
	Accordian,
	ThreeLayout,
	Text,
	Layout,
	Placeholder,
};
