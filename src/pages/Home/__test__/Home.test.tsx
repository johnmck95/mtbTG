import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Home from '../Home';

test('Renders the Form by default', () => {
  render(<Home />);
  screen.getByRole('heading', { name: 'RIDER METRICS' });
  screen.getByRole('heading', { name: 'BIKE METRICS' });
});

test('Renders Output Page after successful form completion', async () => {
  render(<Home />);
  user.type(screen.getByLabelText('Height (feet)'), '6');
  user.type(screen.getByLabelText('Height (inches)'), '2');
  user.type(screen.getByLabelText('Weight (lb)'), '180');
  user.click(screen.getByText('Neutral'));
  user.click(screen.getByTestId('sliderValue'));
  fireEvent.change(screen.getByTestId('sliderValue'), { value: '5' });
  user.type(screen.getByLabelText('Reach (mm)'), '510');
  user.type(screen.getByLabelText('Stack (mm)'), '640');
  user.click(screen.getByText('Enduro'));
  user.click(screen.getByRole('button', { name: 'Calculate' }));

  await waitFor(() => {
    expect(screen.getByText('YOUR SETTINGS')).toBeInTheDocument();
  });
});
