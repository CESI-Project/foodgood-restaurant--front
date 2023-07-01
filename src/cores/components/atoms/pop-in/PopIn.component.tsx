import './PopIn.component.scss';
import type { ReactNode } from 'react';

interface PopInComponentProps {
	show: boolean;
	children: ReactNode;
}
export const PopInComponent = ({ show, children }: PopInComponentProps) => {
	const showHideClassName = show ? 'display-block' : 'display-none';

	return (
		<div className={`pop-in ${showHideClassName}`}>
			<section className='pop-in__main'>{children}</section>
		</div>
	);
};
