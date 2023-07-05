import './Account.component.scss';
import type { FormEvent } from 'react';
import { InputFormComponent } from '../../cores/components/molecules/input-form/InputForm.component';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';

interface AccountProps {
	email?: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
	address?: string;
	postalCode?: number;
	city?: string;
	country?: string;
	onSave: (e: FormEvent<HTMLFormElement>) => void;
}

export const AccountComponent = ({
	email,
	firstName,
	lastName,
	phone,
	address,
	postalCode,
	city,
	country,
	onSave,
}: AccountProps) => (
	<div className='account'>
		<div className='account__title'>Mon compte</div>
		<form
			className='account__form'
			onSubmit={onSave}
			id='account'
		>
			<InputFormComponent
				title='Email'
				defaultValue={email}
				type='email'
				name='email'
			/>
			<InputFormComponent
				title='Prénom'
				defaultValue={firstName}
				type='text'
				name='firstName'
			/>
			<InputFormComponent
				title='Nom'
				defaultValue={lastName}
				type='text'
				name='lastName'
			/>
			<InputFormComponent
				title='Téléphone'
				defaultValue={phone}
				type='tel'
				name='phone'
			/>
			<InputFormComponent
				title='Adresse'
				defaultValue={address}
				type='text'
				name='address'
			/>
			<InputFormComponent
				title='Code postal'
				defaultValue={postalCode}
				type='number'
				name='postalCode'
			/>
			<InputFormComponent
				title='Ville'
				defaultValue={city}
				type='text'
				name='city'
			/>
			<InputFormComponent
				title='Pays'
				defaultValue={country}
				type='text'
				name='country'
			/>
			<div className='account__button'>
				<ButtonComponent
					type='submit'
					designType='primary'
				>
					Enregistrer
				</ButtonComponent>
			</div>
		</form>
	</div>
);
