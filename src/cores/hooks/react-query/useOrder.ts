import { useMutation, useQuery } from 'react-query';
import { getOrders, putOrder } from '../../services/Order.service';

export const useGetOrder = (restaurantId: string) => {
	const { data } = useQuery(['orders', restaurantId], () => getOrders(restaurantId), { enabled: !!restaurantId });

	return { orders: data };
};

export const usePutOrder = () => useMutation('order', putOrder);
