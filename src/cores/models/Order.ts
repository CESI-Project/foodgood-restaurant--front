import type { Food } from './Food';
import type { Restaurant } from './Restaurant';
import type { STATUS_ENUM } from '../enum/Status.enum';

export interface Order {
	_id: string;
	user: string;
	restaurant?: Restaurant;
	deliveryDriver: string;
	foods?: { food: Food; quantity: number; price: number }[];
	orderDate: string;
	totalPrice: number;
	status: STATUS_ENUM;
}
