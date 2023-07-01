import type { ROLE } from '../enum/Role.enum';

export interface User {
	id?: string;
	email?: string;
	password?: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
	address?: string;
	postalCode?: number;
	city?: string;
	country?: string;
	role?: ROLE;
}
