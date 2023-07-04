import { render, screen } from '@testing-library/react';
import { PopInComponent } from './PopIn.component';

test('renders PopInComponent correctly', () => {
	render(
		<PopInComponent show>
			<div>Contenu de la PopIn</div>
		</PopInComponent>,
	);

	const childContent = screen.getByText('Contenu de la PopIn');
	expect(childContent).toBeInTheDocument();
});
