import type { Food } from './Food';
import type { Restaurant } from './Restaurant';

export interface Order {
	id: string;
	user: string;
	restaurant?: Restaurant;
	deliveryDriver: string;
	foods?: { food: Food; quantity: number; price: number }[];
}
