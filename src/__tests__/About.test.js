import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the correct child components', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home');
  const aboutElement = screen.getByTestId('about');

  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
});

