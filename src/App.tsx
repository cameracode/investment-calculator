import React, { useState } from 'react';
import InvestmentForm from './components/InvestmentForm';
import InvestmentResults from './components/InvestmentResults';
import { InvestmentCalculator } from './services/InvestmentCalculator';
import { CalculationResult, InvestmentData } from './models/InvestmentTypes';

const App: React.FC = () => {
  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleFormSubmit = (data: InvestmentData) => {
    // Convert expectedReturn from percent to decimal
    const normalizedData = {
      ...data,
      expectedReturn: data.expectedReturn / 100,
    };
    const calculator = new InvestmentCalculator(normalizedData);
    const calcResults = calculator.calculate();
    setResults(calcResults);
  };

  return (
    <div className="text-center p-5 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Investment Calculator</h1>
      <InvestmentForm onSubmit={handleFormSubmit} />
      {results && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Investment Results</h2>
          <InvestmentResults results={results} />
        </div>
      )}
    </div>
  );
};

export default App;

// import React from 'react';

// const App: React.FC = () => (
//   <div>
//     <h1>Hello, World!</h1>
//   </div>
// );

// export default App;