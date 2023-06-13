import type { FormEvent } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { InputFormComponent } from '../../cores/components/molecules/input-form/InputForm.component';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';
import './Login.component.scss';

interface LoginComponentProps {
	onLogin: (e: FormEvent<HTMLFormElement>) => void;
	navigate: NavigateFunction;
}

export const LoginComponent = ({ onLogin, navigate }: LoginComponentProps) => (
	<div className='login'>
		<div className='login__title'>Bienvenue sur GoodFood</div>
		<form
			id='login'
			onSubmit={onLogin}
			className='login__form'
		>
			<InputFormComponent
				title='Email'
				placeholder='john.martin@gmail.com'
				type='email'
				name='email'
			/>
			<InputFormComponent
				title='Mot de passe'
				placeholder='MyPassword123'
				type='password'
				name='password'
			/>
			<div className='login__button'>
				<ButtonComponent
					type='submit'
					designType='primary'
				>
					Se connecter
				</ButtonComponent>
				<ButtonComponent
					type='button'
					designType='secondary'
					onClick={() => navigate('/register')}
				>
					S'inscrire
				</ButtonComponent>
			</div>
		</form>
	</div>
);
