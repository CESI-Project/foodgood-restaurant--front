import { render, screen } from '@testing-library/react';
import { RestaurantItemComponent } from './RestaurantItem.component';

describe('RestaurantItemComponent', () => {
	it('renders the restaurant item component with correct name, image, address, and rating', () => {
		const restaurantItemProps = {
			id: '1',
			name: 'Restaurant Name',
			image: 'restaurant.jpg',
			address: '123 Main Street',
			rating: 4.5,
		};

		render(
			<RestaurantItemComponent
				id={restaurantItemProps.id}
				name={restaurantItemProps.name}
				image={restaurantItemProps.image}
				address={restaurantItemProps.address}
				rating={restaurantItemProps.rating}
			/>,
		);

		const nameElement = screen.getByText(restaurantItemProps.name);
		const imageElement = screen.getByAltText(restaurantItemProps.name);
		const ratingElement = screen.getByText(restaurantItemProps.rating.toString());
		const addressElement = screen.getByText(restaurantItemProps.address);

		expect(nameElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', restaurantItemProps.image);
		expect(ratingElement).toBeInTheDocument();
		expect(addressElement).toBeInTheDocument();
	});
});
