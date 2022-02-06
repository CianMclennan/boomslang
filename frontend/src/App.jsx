import './styles/reset.css';
import './styles/app.scss';
import Navigation from './navigation/Navigation.jsx';
import { useSelector } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
const MaintenanceScreen = React.lazy(() =>
	import('./editor/MaintenanceScreen')
);

const App = () => {
	const [shouldShowMaintenance, title] = useSelector(
		({ settings: { show_maintenance_message = false, title } }) => [
			show_maintenance_message,
			title,
		]
	);

	useEffect(() => (document.title = title), [title]);

	return shouldShowMaintenance ? (
		<Suspense fallback={<></>}>
			<MaintenanceScreen />
		</Suspense>
	) : (
		<Navigation />
	);
};

export default App;
