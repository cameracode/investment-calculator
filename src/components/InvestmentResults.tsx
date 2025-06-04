import React from 'react';
import { CalculationResult } from '../models/InvestmentTypes';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

    // Prepare data for the chart
    const labels = results.map((r) => r.year);
    const totalAmounts = results.map((r) => r.totalAmount);
    const totalContributions = results.map((r) => r.totalContributions);
    const totalInterest = results.map((r) => r.totalInterestEarned);

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Amount',
                data: totalAmounts,
                borderColor: 'rgb(34,197,94)',
                backgroundColor: 'rgba(34,197,94,0.2)',
                tension: 0.3,
            },
            {
                label: 'Total Contributions',
                data: totalContributions,
                borderColor: 'rgb(59,130,246)',
                backgroundColor: 'rgba(59,130,246,0.2)',
                tension: 0.3,
            },
            {
                label: 'Total Interest Earned',
                data: totalInterest,
                borderColor: 'rgb(99,102,241)',
                backgroundColor: 'rgba(99,102,241,0.2)',
                tension: 0.3,
            },
        ],
    };

    return (
        <div>
            <div className="mb-8 flex justify-center">
                <div style={{ maxWidth: 500, maxHeight: 250, width: '100%' }}>
                    <Line data={data} options={{ maintainAspectRatio: false, responsive: true }} height={250} />
                </div>
            </div>
            <div className="overflow-x-auto flex justify-center">
                <div style={{ maxWidth: 700, width: '100%' }}>
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
            </div>
        </div>
    );
};

export default InvestmentResults;