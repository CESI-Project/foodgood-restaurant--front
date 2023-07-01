import type { Restaurant } from './Restaurant';

export interface Food {
	id?: string;
	name?: string;
	type?: string;
	imageUrl?: string;
	price?: number;
	description?: string;
	restaurant?: Restaurant;
}
