import './Supplier.component.scss';

interface SupplierComponentProps {
	id?: string;
	name?: string;
	phone?: string;
}

export const SupplierComponent = ({ id, name, phone }: SupplierComponentProps) => (
	<div
		className='supplier'
		key={id}
	>
		<div className='supplier__name'>{name}</div>
		<div className='supplier__phone'>{phone}</div>
	</div>
);
