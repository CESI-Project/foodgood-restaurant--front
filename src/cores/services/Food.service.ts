import type { Food } from '../models/Food';
import { BACKEND_URI } from './index';

export const getFoods = (restaurantId?: string): Promise<Food[]> =>
	fetch(`${BACKEND_URI}/food`).then(response => response.json());
