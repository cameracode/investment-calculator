import React from 'react';
import { CalculationResult } from '../models/InvestmentTypes';

interface InvestmentResultsProps {
    results: CalculationResult;
}

const InvestmentResults: React.FC<InvestmentResultsProps> = ({ results }) => {
    if (typeof results === 'string') {
        return <p className="text-red-600 font-semibold">{results}</p>;
    }

    if (!results || results.length === 0) {
        return <p className="text-gray-500">No results to display.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="px-4 py-2 text-left font-bold text-blue-800">Year</th>
                        <th className="px-4 py-2 text-left font-bold text-blue-800">Total Amount</th>
                        <th className="px-4 py-2 text-left font-bold text-blue-800">Total Contributions</th>
                        <th className="px-4 py-2 text-left font-bold text-blue-800">Total Interest Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index} className="even:bg-gray-50">
                            <td className="px-4 py-2 font-semibold">{result.year}</td>
                            <td className="px-4 py-2 font-mono text-green-700">${result.totalAmount.toFixed(2)}</td>
                            <td className="px-4 py-2 font-mono">${result.totalContributions.toFixed(2)}</td>
                            <td className="px-4 py-2 font-mono text-blue-700">${result.totalInterestEarned.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestmentResults;