import './Input.component.scss';
import type { ReactComponentElement } from 'react';

export type InputType = 'search' | 'email' | 'password' | 'text';

interface InputComponentProps {
	placeholder: string;
	icon?: ReactComponentElement<any>;
	type?: InputType;
	name?: string;
	onChange?: () => void;
}

export const InputComponent = ({ placeholder, icon, onChange, name, type }: InputComponentProps) => (
	<div className='input'>
		{icon && (
			<div
				data-testid='input-icon'
				className='input__icon'
			>
				{icon}
			</div>
		)}
		<input
			id={placeholder}
			name={name}
			type={type}
			className={`input__field ${icon ? 'input__field--with-icon' : ''}`}
			placeholder={placeholder}
			onChange={onChange}
		/>
	</div>
);
