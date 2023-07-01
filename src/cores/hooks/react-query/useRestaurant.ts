import { useQuery } from 'react-query';
import { getRestaurant, getRestaurants } from '../../services/Restaurant.service';

export const useRestaurants = () => {
	const { data } = useQuery('restaurant', getRestaurants);

	return { restaurants: data };
};

export const useRestaurant = (id?: string) => {
	const { data } = useQuery(['restaurant', id], () => getRestaurant(id), { enabled: !!id });

	return { restaurant: data };
};
