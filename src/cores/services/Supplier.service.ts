import type { Supplier } from '../models/Supplier';
import { BACKEND_URI } from './index';

export const getSuppliers = (restaurantId?: string): Promise<Supplier[]> =>
	fetch(`${BACKEND_URI}/suppliers/mySuppliers/${restaurantId}`).then(response => response.json());

export const postSupplier = (supplier: Supplier): Promise<Supplier> =>
	fetch(`${BACKEND_URI}/suppliers/addSuppliers/${supplier.restaurantId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(supplier),
	}).then(response => response.json());
