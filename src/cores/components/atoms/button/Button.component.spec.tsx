import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ButtonComponent } from './Button.component';

const buttonText = 'Click me';

describe('ButtonComponent', () => {
	it('renders the button with correct text', () => {
		render(
			<ButtonComponent
				type='button'
				designType='primary'
				onClick={() => {}}
			>
				{buttonText}
			</ButtonComponent>,
		);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toBeInTheDocument();
	});

	it('renders the button with primary design', () => {
		render(
			<ButtonComponent
				type='button'
				designType='primary'
				onClick={() => {}}
			>
				{buttonText}
			</ButtonComponent>,
		);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toHaveClass('button__primary');
	});

	it('renders the button with secondary design', () => {
		render(
			<ButtonComponent
				type='button'
				designType='secondary'
				onClick={() => {}}
			>
				{buttonText}
			</ButtonComponent>,
		);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toHaveClass('button__secondary');
	});

	it('triggers onClick event when the button is clicked', async () => {
		const onClickMock = vi.fn();
		render(
			<ButtonComponent
				type='button'
				designType='primary'
				onClick={onClickMock}
			>
				{buttonText}
			</ButtonComponent>,
		);
		const buttonElement = screen.getByText('Click me');
		await userEvent.click(buttonElement);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
