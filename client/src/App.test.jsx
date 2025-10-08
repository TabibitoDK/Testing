import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders dock apps in the desktop', () => {
  render(<App />);
  expect(screen.getByAltText('Finder')).toBeInTheDocument();
  expect(screen.getByAltText('Terminal')).toBeInTheDocument();
});

test('opens file manager when dock icon is clicked', () => {
  render(<App />);
  const finderIcon = screen.getByAltText('Finder');
  fireEvent.click(finderIcon);
  expect(screen.getByText('Downloads')).toBeInTheDocument();
});
