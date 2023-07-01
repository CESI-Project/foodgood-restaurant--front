import type { FormEvent, ReactNode } from 'react';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import './RestaurantManager.component.scss';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';
import { PopInComponent } from '../../cores/components/atoms/pop-in/PopIn.component';
import { InputComponent } from '../../cores/components/atoms/input/Input.component';

interface RestaurantManagerComponentProps {
	id?: string;
	name?: string;
	address?: string;
	rating?: number;
	image?: string;
	foodItems?: ReactNode;
	addFood?: (e: FormEvent<HTMLFormElement>) => void;
	handleShowFoodForm: () => void;
	showFoodForm: boolean;
	supplierItems?: ReactNode;
	addSupplier: (e: FormEvent<HTMLFormElement>) => void;
	handleShowSupplierForm: () => void;
	showSupplierForm: boolean;
}

export const RestaurantManagerComponent = ({
	id,
	name,
	image,
	address,
	rating,
	foodItems,
	addFood,
	handleShowFoodForm,
	showFoodForm,
	supplierItems,
	addSupplier,
	handleShowSupplierForm,
	showSupplierForm,
}: RestaurantManagerComponentProps) => (
	<div className='restaurant-manager'>
		<div className='restaurant-manager__left'>
			<RestaurantItemComponent
				id={id}
				name={name}
				image={image}
				address={address}
				rating={rating}
			/>
			<div className='restaurant-manager__left__button'>
				<PopInComponent show={showFoodForm}>
					<form
						id='food'
						onSubmit={addFood}
						className='food-form'
					>
						<label htmlFor='foodName'>Nom de l'article</label>
						<InputComponent
							type='text'
							name='foodName'
							placeholder='Pizza Margharita'
						/>
						<label htmlFor='foodType'>Type de l'article</label>
						<InputComponent
							type='text'
							name='foodType'
							placeholder='Pizza'
						/>
						<label htmlFor='foodPrice'>Prix de l'article</label>
						<InputComponent
							type='text'
							name='foodPrice'
							placeholder='10'
						/>
						<label htmlFor='foodDescription'>Description de l'article</label>
						<InputComponent
							type='text'
							name='foodDescription'
							placeholder='Une pizza avec de la mozzarella et de la tomate'
						/>
						<label htmlFor='foodImage'>Image de l'article</label>
						<input
							type='file'
							name='foodImage'
							id='foodImage'
						/>
						<ButtonComponent
							type='submit'
							designType='primary'
						>
							Ajouter
						</ButtonComponent>
					</form>
				</PopInComponent>
				<ButtonComponent
					type='button'
					designType='primary'
					onClick={() => handleShowFoodForm()}
				>
					Ajouter un article
				</ButtonComponent>
				<PopInComponent show={showSupplierForm}>
					<form
						id='supplier'
						onSubmit={addSupplier}
						className='food-form'
					>
						<label htmlFor='supplierName'>Nom du fournisseur</label>
						<InputComponent
							type='text'
							name='supplierName'
							placeholder='Pierre Martin'
						/>
						<label htmlFor='supplierPhone'>Téléphone du fournisseur</label>
						<InputComponent
							type='text'
							name='supplierPhone'
							placeholder='06 12 34 56 78'
						/>
						<ButtonComponent
							type='submit'
							designType='primary'
						>
							Ajouter
						</ButtonComponent>
					</form>
				</PopInComponent>
				<ButtonComponent
					type='button'
					designType='primary'
					onClick={() => handleShowSupplierForm()}
				>
					Ajouter un fournisseur
				</ButtonComponent>
			</div>
			<div className='restaurant-manager__left__supplier'>
				<div className='restaurant-manager__left__supplier__title'>Liste des fournisseurs :</div>
				{supplierItems}
			</div>
		</div>
		<div className='restaurant-manager__right'>{foodItems}</div>
	</div>
);
