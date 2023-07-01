import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderComponent } from './Header.component';

describe('HeaderComponent', () => {
	it('navigates to the correct URLs when logo and account icons are clicked', () => {
		render(
			<Router>
				<HeaderComponent />
			</Router>,
		);

		const logoLinkElement = screen.getByTestId('logo-icon');
		const accountLinkElement = screen.getByTestId('account-icon');

		expect(logoLinkElement).toHaveAttribute('href', '/');
		expect(accountLinkElement).toHaveAttribute('href', '/account');
	});
});
