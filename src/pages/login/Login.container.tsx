import type { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { LoginComponent } from './Login.component';
import type { User } from '../../cores/models/User';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { useLogin } from '../../cores/hooks/react-query/useUser';

export const LoginContainer = () => {
	const { mutate } = useLogin();
	const { logIn } = useUserContext();

	const onLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const user: User = { email, password };
		mutate(user, {
			onSuccess: () => {
				logIn();
			},
			onError: () => {
				toast.error('Authentification échouée', { toastId: 1 });
			},
		});
	};

	return <LoginComponent onLogin={onLogin} />;
};
