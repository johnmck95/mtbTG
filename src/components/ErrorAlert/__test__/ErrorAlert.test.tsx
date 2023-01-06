import { render } from '@testing-library/react';
import ErrorAlert from './../ErrorAlert';
import { errorCodes } from './../../../data/ErrorCodes';

test('ErrorAlert renders without error', () => {
	const { getByText } = render(<ErrorAlert errorMessage='test message' />);
	expect(getByText('test message')).toBeVisible();
});

test('ErrorAlert correctly reads from ErrorCodes.ts', () => {
	const { getByText } = render(
		<ErrorAlert errorMessage={errorCodes[1].errorMessage} />,
	);
	expect(
		getByText(
			'Please enter a non-negative numeric value less than 12 for Height (inches)',
		),
	).toBeVisible();
});
