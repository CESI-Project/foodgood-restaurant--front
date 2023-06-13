import type { User } from '../models/User';
import { BACKEND_URI } from './index';

export const postLogin = ({ email, password }: User): Promise<User> =>
	fetch(`${BACKEND_URI}/user/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	}).then(response =>
		// if (response.data.accessToken) {
		// 	localStorage.setItem('user', JSON.stringify(response.data));
		// }
		response.json(),
	);

export const postRegister = ({ email, password }: User): Promise<User> =>
	fetch(`${BACKEND_URI}/user/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	}).then(response => response.json());
