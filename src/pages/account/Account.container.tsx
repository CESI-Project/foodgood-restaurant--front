import type { FormEvent } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AccountComponent } from './Account.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { useGetUser, usePutUser } from '../../cores/hooks/react-query/useUser';
import type { User } from '../../cores/models/User';

export const AccountContainer = () => {
	const { checkLogin, currentUser } = useUserContext();
	// @ts-ignore
	const { user } = useGetUser(currentUser?.userId);
	const { mutate } = usePutUser();

	useEffect(() => {
		checkLogin();
	}, []);

	const onSave = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const phone = formData.get('phone') as string;
		const address = formData.get('address') as string;
		const postalCode = formData.get('postalCode') as string;
		const city = formData.get('city') as string;
		const country = formData.get('country') as string;
		const userForm: User = {
			// @ts-ignore
			id: currentUser?.userId,
			email,
			firstName,
			lastName,
			phone,
			address,
			postalCode: Number(postalCode),
			city,
			country,
		};
		mutate(userForm, {
			onSuccess: () => {
				toast.success('Enregistrement réussie', { toastId: 1 });
			},
			onError: () => {
				toast.error('Enregistrement échouée', { toastId: 1 });
			},
		});
	};

	return (
		<AccountComponent
			email={user?.email}
			firstName={user?.firstName}
			lastName={user?.lastName}
			phone={user?.phone}
			address={user?.address}
			postalCode={user?.postalCode}
			city={user?.city}
			country={user?.country}
			onSave={onSave}
		/>
	);
};
