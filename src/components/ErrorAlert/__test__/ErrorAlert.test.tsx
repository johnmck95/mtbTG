import { render } from '@testing-library/react';
import ErrorAlert from './../ErrorAlert';
import { errorCodes } from './../../../data/ErrorCodes';

test('ErrorAlert renders without error', () => {
  const { getByText } = render(<ErrorAlert errorMessage='test message' />);
  getByText('test message');
});

test('ErrorAlert correctly reads from ErrorCodes.ts', () => {
  const { getByText } = render(
    <ErrorAlert errorMessage={errorCodes[1].errorMessage} />,
  );
  getByText(
    'Please enter a non-negative numeric value less than 12 for Height (inches)',
  );
});
