import { useMutation, useQuery } from 'react-query';
import { getUser, postLogin, postRegister, putUser } from '../../services/User.service';
import { getRestaurant } from '../../services/Restaurant.service';

export const useLogin = () => useMutation('login', postLogin);

export const useRestaurant = (id?: string) => {
	const { data } = useQuery(['restaurant', id], () => getRestaurant(id), { enabled: !!id });

	return { restaurant: data };
};
export const useGetUser = (id?: string) => {
	const { data } = useQuery(['user', id], () => getUser(id), { enabled: !!id });

	return { user: data };
};

export const usePutUser = () => useMutation('putUser', putUser);

export const useRegister = () => useMutation('register', postRegister);
