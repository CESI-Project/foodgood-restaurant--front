import './Input.component.scss';
import type { ReactComponentElement } from 'react';

export type InputType = 'search' | 'email' | 'password' | 'text' | 'number' | 'tel';

interface InputComponentProps {
	placeholder?: string;
	icon?: ReactComponentElement<any>;
	type?: InputType;
	name?: string;
	defaultValue?: string | number;
	onChange?: () => void;
}

export const InputComponent = ({ placeholder, icon, onChange, defaultValue, name, type }: InputComponentProps) => (
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
			defaultValue={defaultValue}
			className={`input__field ${icon ? 'input__field--with-icon' : ''}`}
			placeholder={placeholder}
			onChange={onChange}
		/>
	</div>
);
