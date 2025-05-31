import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the Investment Calculator heading and form', () => {
    render(<App />);
    expect(screen.getByText(/Investment Calculator/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Initial Amount/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });
}); 