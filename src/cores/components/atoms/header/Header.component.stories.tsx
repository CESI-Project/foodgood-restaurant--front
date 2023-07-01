import type { Meta, StoryObj } from '@storybook/react';
import { HeaderComponent } from './Header.component';

const meta: Meta<typeof HeaderComponent> = {
	title: 'Header',
	component: HeaderComponent,
};
export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Primary: Story = {};
