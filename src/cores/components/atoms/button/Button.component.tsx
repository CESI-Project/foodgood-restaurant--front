import './Button.component.scss';
import type { ReactNode } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';
type DesignType = 'primary' | 'secondary';

interface ButtonProps {
	type: ButtonType;
	designType: DesignType;
	children: ReactNode;
	onClick?: () => void;
}

export const ButtonComponent = ({ type, designType, children, onClick }: ButtonProps) => (
	<button
		/* eslint-disable-next-line react/button-has-type */
		type={type}
		id={`${children}`}
		className={`button ${designType === 'primary' ? 'button__primary' : 'button__secondary'}`}
		onClick={onClick}
	>
		{children}
	</button>
);
