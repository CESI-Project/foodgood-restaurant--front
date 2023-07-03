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
		const { accessToken } = user;

		if (accessToken) {
			setCurrentUser(user);
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
			navigate('/login');
		}
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
		isAuthenticated,
		setIsAuthenticated,
	};

	return <UserContextProvider value={context}>{children}</UserContextProvider>;
};
