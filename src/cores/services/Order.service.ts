import type { Order } from '../models/Order';
import { BACKEND_URI } from './index';

export const getOrders = (): Promise<Order[]> => fetch(`${BACKEND_URI}/meals`).then(response => response.json());

interface putOrderProps {
	id: string;
	status: string;
}
export const putOrder = ({ id, status }: putOrderProps): Promise<Order> =>
	fetch(`${BACKEND_URI}/orders/${id}/updateStatus`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ status }),
	}).then(response => response.json());
