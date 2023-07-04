import './FoodItem.component.scss';
import type { Food } from '../../../models/Food';
import { ButtonComponent } from '../button/Button.component';
import { deleteFood } from '../../../services/Food.service';

export const FoodItemComponent = ({ _id, name, description, price, imageUrl }: Food) => (
	<button
		id={_id}
		key={_id}
		type='button'
		className='food-item'
	>
		<ButtonComponent
			type='button'
			designType='secondary'
			onClick={() => deleteFood(_id)}
		>
			Supprimer
		</ButtonComponent>
		<div className='food-item__content'>
			<div className='food-item__content__name'>{name}</div>
			<div className='food-item__content__description'>{description}</div>
			<div className='food-item__content__price'>{price} €</div>
		</div>
		<img
			src={imageUrl}
			alt={name}
		/>
	</button>
);
