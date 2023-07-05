import type { InputType } from '../../atoms/input/Input.component';
import { InputComponent } from '../../atoms/input/Input.component';
import './InputForm.component.scss';

interface InputFormComponentProps {
	title: string;
	placeholder?: string;
	onChange?: () => void;
	defaultValue?: string | number;
	type?: InputType;
	name?: string;
}

export const InputFormComponent = ({
	title,
	placeholder,
	defaultValue,
	onChange,
	name,
	type,
}: InputFormComponentProps) => (
	<div className='input-form'>
		<div className='input-form__title'>{title}</div>
		<InputComponent
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			defaultValue={defaultValue}
			name={name}
		/>
	</div>
);
