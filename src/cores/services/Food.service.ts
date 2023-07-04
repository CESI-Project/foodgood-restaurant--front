import type { Food } from '../models/Food';
import { BACKEND_URI } from './index';
import { authHeader } from '../utils/authHeader';

export const getFoods = (id: string): Promise<Food[]> =>
	fetch(`${BACKEND_URI}/meals/byRestaurant/${id}`, { headers: authHeader() }).then(response => response.json());

export const postFood = ({ description, imageUrl, name, price, restaurant, type }: Food): Promise<Food> => {
	const formData = new FormData();
	formData.append('name', name || '');
	formData.append('type', type || '');
	formData.append('price', String(price || 0));
	formData.append('description', description || '');
	formData.append('image', imageUrl || '');
	formData.append('restaurant', restaurant || '');

	return fetch(`${BACKEND_URI}/meals`, {
		method: 'POST',
		headers: authHeader(),
		body: formData,
	}).then(response => response.json());
};
export const deleteFood = (id?: string): Promise<Food> =>
	fetch(`${BACKEND_URI}/meals/${id}`, {
		method: 'DELETE',
		headers: authHeader(),
	}).then(response => response.json());
