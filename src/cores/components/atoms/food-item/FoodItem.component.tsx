import './FoodItem.component.scss';
import type { Food } from '../../../models/Food';

export const FoodItemComponent = ({ id, name, description, price, imageUrl }: Food) => (
	<button
		id={id}
		key={id}
		type='button'
		className='food-item'
	>
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
