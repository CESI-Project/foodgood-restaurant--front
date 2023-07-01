import type { User } from '../models/User';
import { BACKEND_URI } from './index';

export const postLogin = ({ email, password }: User): Promise<User> =>
	fetch(`${BACKEND_URI}/users/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	}).then(response =>
		// if (response.data.accessToken) {
		// 	localStorage.setItem('user', JSON.stringify(response.data));
		// }
		response.json(),
	);

export const postRegister = (register: User): Promise<User> =>
	fetch(`${BACKEND_URI}/users/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(register),
	}).then(response => response.json());
