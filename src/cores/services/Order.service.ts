import type { Order } from '../models/Order';
import { BACKEND_URI } from './index';
import { authHeader } from '../utils/authHeader';

export const getOrders = (id: string): Promise<Order[]> =>
	fetch(`${BACKEND_URI}/orders/byRestaurant/${id}`, { headers: authHeader() }).then(response => response.json());

interface PutOrderProps {
	id: string;
	status: string;
}

export const putOrder = ({ id, status }: PutOrderProps): Promise<Order> =>
	fetch(`${BACKEND_URI}/orders/${id}/updateStatus`, {
		method: 'PUT',
		headers: authHeader(),
		body: JSON.stringify({ status }),
	}).then(response => response.json());
