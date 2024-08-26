import React, {lazy} from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-notifications/lib/notifications.css';
import 'simplebar-react/dist/simplebar.min.css';
import { NotificationContainer } from 'react-notifications';

import DashboardLayout from '@/layouts/dashboard';

export const IndexPage = lazy(() => import('@/pages/app'));
export const OrderDetail = lazy(() => import('@/pages/order_detail'));

function App() {

	const location = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route index element={<IndexPage />} />
				</Route>
				<Route path="/order/detail" element={<OrderDetail />} />
			</Routes>
			<NotificationContainer />
		</>
	);
}

export default App;