import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world!! read', () => {
  render(<App />);
  const readElement = screen.getByText('hello world!!');
  expect(readElement).toBeInTheDocument();
  expect(readElement.classList).toContain('read');
});
