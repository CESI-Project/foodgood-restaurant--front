import { StarIcon } from '../../../assets/images/icons';
import './RestaurantItem.component.scss';

interface RestaurantItemComponentProps {
	id?: string;
	name?: string;
	image?: string;
	address?: string;
	rating?: number;
}

export const RestaurantItemComponent = ({ name, image, address, rating, id }: RestaurantItemComponentProps) => (
	<div
		className='restaurant-item'
		key={id}
	>
		<img
			src={image}
			alt={name}
		/>
		<div className='restaurant-item__content'>
			<div className='restaurant-item__content__name'>{name}</div>
			<div className='restaurant-item__content__rating'>
				{rating}
				<StarIcon />
			</div>
			<div className='restaurant-item__content__location'>
				<div>{address}</div>
			</div>
		</div>
	</div>
);
