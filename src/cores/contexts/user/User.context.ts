import { createContext, useContext } from 'react';
import type { User } from '../../models/User';

export interface UserInfo {
	currentUser?: User;
	setCurrentUser: (user: User | undefined) => void;
	checkLogin: () => void;
	logOut: () => void;
	isAuthenticated: boolean;
	setIsAuthenticated: (prevState: boolean) => void;
}

export const UserContext = createContext<UserInfo>({} as any);
export const UserContextProvider = UserContext.Provider;
export const useUserContext = () => useContext(UserContext);
