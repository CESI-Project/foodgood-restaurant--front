import type { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from './Login.component';
import { useUser } from '../../cores/hooks/react-query/useUser';
import type { User } from '../../cores/models/User';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const LoginContainer = () => {
	const { mutate, isError, isSuccess } = useUser();
	const { setIsAuthenticated } = useUserContext();
	const navigate = useNavigate();

	const onLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const user: User = { email, password };
		mutate(user);
	};

	if (isSuccess) {
		setIsAuthenticated(true);
		navigate('/accueil');
	}

	if (isError) {
		toast.error('Authentification échouée', { toastId: 1 });
	}

	return (
		<LoginComponent
			onLogin={onLogin}
			navigate={navigate}
		/>
	);
};
