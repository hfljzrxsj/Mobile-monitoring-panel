import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App0';

test('renders learn react link', () => {
  render(<React.StrictMode><App /></React.StrictMode>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});