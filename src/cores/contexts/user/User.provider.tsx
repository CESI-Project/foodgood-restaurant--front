import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../models/User';
import { UserContextProvider } from './User.context';

interface UserContextProviderProps {
	children: ReactNode;
}

export const UserInfoProvider = ({ children }: UserContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User>();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	const user = JSON.parse(sessionStorage.getItem('user') || '{}');

	const checkLogin = () => {
		const { token } = user;

		if (token) {
			setCurrentUser(user);
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
			navigate('/login');
		}
	};

	const logIn = () => {
		setCurrentUser(user);
		setIsAuthenticated(true);
		navigate('/order-management');
	};

	const logOut = () => {
		setCurrentUser(undefined);
		setIsAuthenticated(false);
		sessionStorage.removeItem('user');
	};

	useEffect(() => {
		checkLogin();
	}, [isAuthenticated]);

	const context = {
		currentUser,
		setCurrentUser,
		checkLogin,
		logOut,
		logIn,
		isAuthenticated,
		setIsAuthenticated,
	};

	return <UserContextProvider value={context}>{children}</UserContextProvider>;
};
