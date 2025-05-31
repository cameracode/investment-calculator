import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InvestmentForm from './InvestmentForm';

describe('InvestmentForm', () => {
  it('renders all input fields and the submit button', () => {
    render(<InvestmentForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/Initial Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Annual Contribution/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expected Return/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Duration/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });

  it('calls onSubmit with form data', () => {
    const handleSubmit = jest.fn();
    render(<InvestmentForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText(/Initial Amount/i), { target: { value: '1000' } });
    fireEvent.change(screen.getByLabelText(/Annual Contribution/i), { target: { value: '500' } });
    fireEvent.change(screen.getByLabelText(/Expected Return/i), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText(/Duration/i), { target: { value: '10' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));
    expect(handleSubmit).toHaveBeenCalledWith({
      initialAmount: 1000,
      annualContribution: 500,
      expectedReturn: 5,
      duration: 10,
    });
  });
}); 