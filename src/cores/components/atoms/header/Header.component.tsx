import { Link } from 'react-router-dom';
import { AccountIcon, LogoTitleIcon } from '../../../assets/images/icons';
import './Header.component.scss';
import { ButtonComponent } from '../button/Button.component';

export const HeaderComponent = () => (
	<div className='header'>
		<Link
			to='/'
			data-testid='logo-icon'
		>
			<LogoTitleIcon />
		</Link>
		<div className='header__right'>
			<Link
				to='/restaurant-management'
				data-testid='restaurant-management'
			>
				<ButtonComponent
					type='button'
					designType='secondary'
				>
					Mon Restaurant
				</ButtonComponent>
			</Link>
			<Link
				to='/order-management'
				data-testid='order-management'
			>
				<ButtonComponent
					type='button'
					designType='primary'
				>
					Mes Commandes
				</ButtonComponent>
			</Link>
			<Link
				to='/account'
				data-testid='account-icon'
			>
				<AccountIcon />
			</Link>
		</div>
	</div>
);
