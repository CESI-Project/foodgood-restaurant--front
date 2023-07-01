import { useMutation, useQuery } from 'react-query';
import { getSuppliers, postSupplier } from '../../services/Supplier.service';

export const useGetSupplier = (restaurantId?: string) => {
	const { data } = useQuery(['supplier', restaurantId], () => getSuppliers(restaurantId), { enabled: !!restaurantId });

	return { suppliers: data };
};

export const usePostSupplier = () => useMutation('supplier', postSupplier);
