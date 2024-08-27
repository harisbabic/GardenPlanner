import { render, screen } from '@testing-library/react';
import App from './App';

test('renders garden planner header', () => {
  render(<App />);
  const headerElement = screen.getByText(/garden planner/i);
  expect(headerElement).toBeInTheDocument();
});
