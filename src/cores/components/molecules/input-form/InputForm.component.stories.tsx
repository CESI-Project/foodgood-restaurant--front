import type { Meta, StoryObj } from '@storybook/react';
import { InputFormComponent } from './InputForm.component';

const meta: Meta<typeof InputFormComponent> = {
	title: 'InputForm',
	component: InputFormComponent,
};
export default meta;

type Story = StoryObj<typeof InputFormComponent>;

export const Primary: Story = {
	args: {
		title: 'Title',
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};
