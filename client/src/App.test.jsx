import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders dock apps in the desktop', () => {
  render(<App />);
  expect(screen.getByText('File Manager')).toBeInTheDocument();
  expect(screen.getByText('Terminal')).toBeInTheDocument();
});

test('opens file manager when dock icon is clicked', () => {
  render(<App />);
  const fileManagerIcon = screen.getByAltText('File Manager');
  fireEvent.click(fileManagerIcon);
  expect(screen.getByText('Downloads')).toBeInTheDocument();
});
