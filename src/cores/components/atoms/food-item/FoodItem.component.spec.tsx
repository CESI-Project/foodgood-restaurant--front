import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { FoodItemComponent } from './FoodItem.component';

describe('FoodItemComponent', () => {
	it('renders the food item component with correct name, description, price, and image', () => {
		const foodItemProps = {
			name: 'Pizza Margherita',
			description: 'Delicious pizza with mozzarella and basil',
			price: 8.99,
			image: 'pizza.jpg',
			onSubmit: vi.fn(),
		};

		render(
			<FoodItemComponent
				name={foodItemProps.name}
				description={foodItemProps.description}
				price={foodItemProps.price}
				image={foodItemProps.image}
				onSelect={foodItemProps.onSubmit}
			/>,
		);

		const nameElement = screen.getByText(foodItemProps.name);
		const descriptionElement = screen.getByText(foodItemProps.description);
		const priceElement = screen.getByText(`${foodItemProps.price} €`);
		const imageElement = screen.getByAltText(foodItemProps.name);

		expect(nameElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(priceElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', foodItemProps.image);
	});
});
