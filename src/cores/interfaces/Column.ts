import type { Order } from '../models/Order';

export interface Column {
	name: string;
	items: Order[];
}
