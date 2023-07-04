import type { Supplier } from '../models/Supplier';
import { BACKEND_URI } from './index';
import { authHeader } from '../utils/authHeader';

export const getSuppliers = (restaurantId?: string): Promise<Supplier[]> =>
	fetch(`${BACKEND_URI}/suppliers/mySuppliers/${restaurantId}`, { headers: authHeader() }).then(response =>
		response.json(),
	);

export const postSupplier = (supplier: Supplier): Promise<Supplier> =>
	fetch(`${BACKEND_URI}/suppliers/addSuppliers/${supplier.restaurantId}`, {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(supplier),
	}).then(response => response.json());
