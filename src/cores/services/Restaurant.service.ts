import type { Restaurant } from '../models/Restaurant';
import { BACKEND_URI } from './index';

export const getRestaurants = (): Promise<Restaurant[]> =>
	fetch(`${BACKEND_URI}/restaurant`).then(response => response.json());

export const getRestaurant = (id?: string): Promise<Restaurant> =>
	fetch(`${BACKEND_URI}/restaurant/${id}`).then(response => response.json());
