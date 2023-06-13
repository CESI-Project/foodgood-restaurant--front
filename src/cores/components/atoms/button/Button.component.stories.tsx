import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from './Button.component';

const meta: Meta<typeof ButtonComponent> = {
	title: 'Button',
	component: ButtonComponent,
};
export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
	args: {
		type: 'button',
		designType: 'primary',
		children: 'Primary',
	},
};

export const Secondary: Story = {
	args: {
		type: 'button',
		designType: 'secondary',
		children: 'Secondary',
	},
};
