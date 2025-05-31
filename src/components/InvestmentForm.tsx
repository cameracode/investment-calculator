import React, { useState } from 'react';
import { InvestmentData } from '../models/InvestmentTypes';

interface InvestmentFormProps {
    onSubmit: (data: InvestmentData) => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<InvestmentData>({
        initialAmount: 0,
        annualContribution: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: parseFloat(value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg bg-gray-50"
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <label htmlFor="initialAmount" className="block mb-1 font-bold">
                    Initial Amount:
                </label>
                <input
                    type="number"
                    id="initialAmount"
                    name="initialAmount"
                    value={formData.initialAmount}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="annualContribution" className="block mb-1 font-bold">
                    Annual Contribution:
                </label>
                <input
                    type="number"
                    id="annualContribution"
                    name="annualContribution"
                    value={formData.annualContribution}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="expectedReturn" className="block mb-1 font-bold">
                    Expected Return (%):
                </label>
                <input
                    type="number"
                    id="expectedReturn"
                    name="expectedReturn"
                    value={formData.expectedReturn}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="duration" className="block mb-1 font-bold">
                    Duration (Years):
                </label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
                type="submit"
            >
                Calculate
            </button>
        </form>
    );
};

export default InvestmentForm;