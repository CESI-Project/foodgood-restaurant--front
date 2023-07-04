import type { FormEvent } from 'react';
import { InputFormComponent } from '../../cores/components/molecules/input-form/InputForm.component';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';
import './Login.component.scss';

interface LoginComponentProps {
	onLogin: (e: FormEvent<HTMLFormElement>) => void;
}

export const LoginComponent = ({ onLogin }: LoginComponentProps) => (
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
			</div>
		</form>
	</div>
);
