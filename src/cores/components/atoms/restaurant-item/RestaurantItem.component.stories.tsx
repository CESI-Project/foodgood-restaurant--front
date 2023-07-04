import type { Meta, StoryObj } from '@storybook/react';
import { RestaurantItemComponent } from './RestaurantItem.component';

const meta: Meta<typeof RestaurantItemComponent> = {
	title: 'RestaurantItem',
	component: RestaurantItemComponent,
};
export default meta;

type Story = StoryObj<typeof RestaurantItemComponent>;

export const Primary: Story = {
	args: {
		name: 'Pizza Hut',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-VPR8v-PCD7Yvi5uJ88SWAHaEK%26pid%3DApi&f=1&ipt=53e6cbdbdce4bec006d2b722b557aba6e7ce42c4a7fee3ef48a1934ff6094659&ipo=images',
		address: '35 rue de la paix',
		rating: 4.5,
	},
};
