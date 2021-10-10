import './styles/reset.css';
import './styles/app.scss';
import Navigation from './navigation/Navigation.jsx';
import { useSelector } from 'react-redux';
import React, { Suspense } from 'react';
const MaintenanceScreen = React.lazy(() =>
	import('./editor/MaintenanceScreen')
);

const App = () => {
	const shouldShowMaintenance = useSelector(
		({ settings: { show_maintenance_message = false } }) =>
			show_maintenance_message
	);

	return shouldShowMaintenance ? (
		<Suspense fallback={<></>}>
			<MaintenanceScreen />
		</Suspense>
	) : (
		<Navigation />
	);
};

export default App;
