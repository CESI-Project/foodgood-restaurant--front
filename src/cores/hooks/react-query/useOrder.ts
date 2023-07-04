import { useMutation } from 'react-query';
import { putOrder } from '../../services/Order.service';

// export const useGetOrder = (restaurantId?: string) => {
// 	const { data } = useQuery(['food', restaurantId], () => getOrders(restaurantId), { enabled: !!restaurantId });
//
// 	return { foods: data };
// };

export const usePutOrder = () => useMutation('order', putOrder);
