import './cores/assets/scss/main.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './pages/login/Login.container';
import { UserInfoProvider } from './cores/contexts/user/User.provider';
import { HeaderComponent } from './cores/components/atoms/header/Header.component';
import { OrderManagerContainer } from './pages/order-manager/OrderManager.container';
import { RestaurantManagerContainer } from './pages/restaurant-manager/RestaurantManager.container';
import { AccountContainer } from './pages/account/Account.container';

export const App = () => (
	<UserInfoProvider>
		<HeaderComponent />
		<Routes>
			<Route
				path='/order-management'
				element={<OrderManagerContainer />}
			/>
			<Route
				path='/restaurant-management'
				element={<RestaurantManagerContainer />}
			/>
			<Route
				path='/account'
				element={<AccountContainer />}
			/>
			<Route
				path='*'
				element={<LoginContainer />}
			/>
		</Routes>
	</UserInfoProvider>
);
