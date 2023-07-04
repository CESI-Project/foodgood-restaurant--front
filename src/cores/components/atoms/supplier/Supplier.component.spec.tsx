import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { SupplierComponent } from './Supplier.component';
import { deleteSupplier } from '../../../services/Supplier.service';

vi.mock('../../../services/Supplier.service', () => ({
	deleteSupplier: vi.fn(),
}));

const mockSupplier = {
	id: '1',
	name: 'Fournisseur A',
	phone: '123456789',
};

test('renders SupplierComponent correctly', () => {
	render(
		<SupplierComponent
			id={mockSupplier.id}
			name={mockSupplier.name}
			phone={mockSupplier.phone}
		/>,
	);

	const nameElement = screen.getByText(mockSupplier.name);
	expect(nameElement).toBeInTheDocument();

	const phoneElement = screen.getByText(mockSupplier.phone);
	expect(phoneElement).toBeInTheDocument();

	const deleteButton = screen.getByText('Supprimer');
	expect(deleteButton).toBeInTheDocument();
	expect(deleteButton.tagName).toBe('BUTTON');
	expect(deleteButton).toHaveClass('button__secondary');
});

test('calls deleteSupplier when delete button is clicked', () => {
	render(
		<SupplierComponent
			id={mockSupplier.id}
			name={mockSupplier.name}
			phone={mockSupplier.phone}
		/>,
	);

	const deleteButton = screen.getByText('Supprimer');
	fireEvent.click(deleteButton);

	expect(deleteSupplier).toHaveBeenCalledWith(mockSupplier.id);
});
