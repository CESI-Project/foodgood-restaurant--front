import './Supplier.component.scss';
import { ButtonComponent } from '../button/Button.component';
import { deleteSupplier } from '../../../services/Supplier.service';

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
		<div className='supplier__content'>
			<div className='supplier__content__name'>{name}</div>
			<div className='supplier__content__phone'>{phone}</div>
		</div>
		<ButtonComponent
			type='button'
			designType='secondary'
			onClick={() => deleteSupplier(id)}
		>
			Supprimer
		</ButtonComponent>
	</div>
);
