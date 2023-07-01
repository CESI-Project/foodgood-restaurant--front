import type { Food } from '../models/Food';
import { BACKEND_URI } from './index';

export const getFoods = (restaurantId?: string): Promise<Food[]> =>
	fetch(`${BACKEND_URI}/meals`).then(response => response.json());

export const postFood = (food: Food): Promise<Food> =>
	fetch(`${BACKEND_URI}/meals`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(food),
	}).then(response => response.json());
