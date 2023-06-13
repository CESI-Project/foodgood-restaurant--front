import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { InputFormComponent } from './InputForm.component';

describe('InputFormComponent', () => {
	it('renders the input form component with correct title and placeholder', () => {
		const inputFormProps = {
			title: 'Name',
			placeholder: 'Enter a name',
			onChange: vi.fn(),
		};

		render(
			<InputFormComponent
				title={inputFormProps.title}
				placeholder={inputFormProps.placeholder}
				onChange={inputFormProps.onChange}
			/>,
		);

		const titleElement = screen.getByText(inputFormProps.title);
		const inputElement = screen.getByPlaceholderText(inputFormProps.placeholder);

		expect(titleElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});
});
