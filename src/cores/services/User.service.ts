import type { User } from '../models/User';
import { BACKEND_URI } from './index';

export const postLogin = ({ email, password }: User): Promise<User> =>
	fetch(`${BACKEND_URI}/users/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	})
		.then(response => response.json())
		.then(response => {
			if (response.token) {
				sessionStorage.setItem('user', JSON.stringify(response));
			}
			return response;
		});

export const postRegister = (register: User): Promise<User> =>
	fetch(`${BACKEND_URI}/users/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(register),
	}).then(response => response.json());
