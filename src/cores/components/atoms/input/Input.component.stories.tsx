import type { Meta, StoryObj } from '@storybook/react';
import { InputComponent } from './Input.component';
import { SearchIcon } from '../../../assets/images/icons';

const meta: Meta<typeof InputComponent> = {
	title: 'Input',
	component: InputComponent,
};
export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Primary: Story = {
	args: {
		placeholder: 'pierre.paul@gmail.com',
	},
};

export const WithIcon: Story = {
	args: {
		placeholder: 'pierre.paul@gmail.com',
		icon: <SearchIcon />,
	},
};
