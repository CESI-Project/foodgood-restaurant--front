import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { InputComponent } from './Input.component';

const placeholder = 'Enter your name';

describe('InputComponent', () => {
	it('renders the input field with placeholder', () => {
		render(
			<InputComponent
				placeholder={placeholder}
				icon={undefined}
				onChange={() => {}}
			/>,
		);
		const inputElement = screen.getByPlaceholderText(placeholder);
		expect(inputElement).toBeInTheDocument();
	});

	it('renders the input field with icon', () => {
		const icon = <i />;
		render(
			<InputComponent
				placeholder={placeholder}
				icon={icon}
				onChange={() => {}}
			/>,
		);
		const inputElement = screen.getByPlaceholderText(placeholder);
		const iconElement = screen.getByTestId('input-icon');
		expect(inputElement).toBeInTheDocument();
		expect(iconElement).toBeInTheDocument();
	});

	it('triggers onChange event when input value changes', async () => {
		const onChangeMock = vi.fn();
		render(
			<InputComponent
				placeholder={placeholder}
				icon={undefined}
				onChange={onChangeMock}
			/>,
		);
		const inputElement = screen.getByPlaceholderText(placeholder);
		const inputValue = 'John Doe';

		await userEvent.type(inputElement, inputValue);

		expect(onChangeMock).toHaveBeenCalledTimes(inputValue.length);
		expect(inputElement).toHaveValue(inputValue);
	});
});
