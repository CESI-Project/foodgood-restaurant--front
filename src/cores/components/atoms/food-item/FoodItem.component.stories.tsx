import type { Meta, StoryObj } from '@storybook/react';
import { FoodItemComponent } from './FoodItem.component';

const meta: Meta<typeof FoodItemComponent> = {
	title: 'FoodItem',
	component: FoodItemComponent,
};
export default meta;

type Story = StoryObj<typeof FoodItemComponent>;

export const Primary: Story = {
	args: {
		id: '1',
		name: 'Pizza Margherita',
		description: 'Pizza with tomato sauce and mozzarella',
		price: 10,
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images',
		onSelect: () => console.log('selected'),
	},
};
