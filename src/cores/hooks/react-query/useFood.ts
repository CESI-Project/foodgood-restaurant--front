import { useMutation, useQuery } from 'react-query';
import { getFoods, postFood } from '../../services/Food.service';

export const useGetFood = (restaurantId?: string) => {
	const { data } = useQuery(['food', restaurantId], () => getFoods(), { enabled: !!restaurantId });

	return { foods: data };
};

export const usePostFood = () => useMutation('food', postFood);
