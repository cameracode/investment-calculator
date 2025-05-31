import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InvestmentResults from './InvestmentResults';
import { CalculationResult } from '../models/InvestmentTypes';

describe('InvestmentResults', () => {
  it('renders table headers and data', () => {
    const results: CalculationResult = [
      {
        year: 'Year 1',
        totalAmount: 1000,
        totalContributions: 500,
        totalInterestEarned: 100,
      },
      {
        year: 'Year 2',
        totalAmount: 2000,
        totalContributions: 1000,
        totalInterestEarned: 300,
      },
    ];
    render(<InvestmentResults results={results} />);
    expect(screen.getByRole('columnheader', { name: /Year/i })).toBeInTheDocument();
    expect(screen.getByText(/Total Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Contributions/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Interest Earned/i)).toBeInTheDocument();
    expect(screen.getByText('Year 1')).toBeInTheDocument();
    expect(screen.getAllByText('$1000.00').length).toBeGreaterThan(0);
    expect(screen.getByText('$500.00')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('Year 2')).toBeInTheDocument();
    expect(screen.getByText('$2000.00')).toBeInTheDocument();
    expect(screen.getAllByText('$1000.00').length).toBeGreaterThan(0);
    expect(screen.getByText('$300.00')).toBeInTheDocument();
  });

  it('renders error message if results is a string', () => {
    render(<InvestmentResults results={"Some error"} />);
    expect(screen.getByText(/Some error/)).toBeInTheDocument();
  });
}); 