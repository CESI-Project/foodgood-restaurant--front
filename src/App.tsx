import './cores/assets/scss/main.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './pages/login/Login.container';
import { UserInfoProvider } from './cores/contexts/user/User.provider';

export const App = () => (
	<UserInfoProvider>
			<Routes>
				<Route
					path='/login'
					element={<LoginContainer />}
				/>
			</Routes>
	</UserInfoProvider>
);
