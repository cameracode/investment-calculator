import { InvestmentData, InvestmentResult, CalculationResult } from '../models/InvestmentTypes';

/**
 * A class to represent and calculate investment growth over time.
 */
export class InvestmentCalculator {
    /**
     * Represents the input data required for an investment calculation.
     */
    private investmentData: InvestmentData;

    constructor(data: InvestmentData) {
        this.investmentData = data;
    }

    /**
     * Calculates the yearly investment growth based on the provided data.
     * 
     * @returns {CalculationResult} - An array of yearly investment results or an error message string.
     */
    calculate(): CalculationResult {
        const { initialAmount, annualContribution, expectedReturn, duration } = this.investmentData;

        if (initialAmount < 0) return 'Initial investment amount must be at least zero';
        if (duration <= 0) return 'No valid amount of years provided.';
        if (expectedReturn <= 0) return 'Expected return must be at least zero';

        let total = initialAmount;
        let totalContributions = 0;
        let totalInterestEarned = 0;

        const annualResults: InvestmentResult[] = [];

        for (let i = 0; i < duration; i++) {
            total = total + annualContribution;      // Add contribution first
            totalContributions += annualContribution;
            total = total * (1 + expectedReturn);    // Then apply return
            totalInterestEarned = total - totalContributions - initialAmount;

            annualResults.push({
                year: `Year ${i + 1}`,
                totalAmount: total,
                totalInterestEarned: Math.max(totalInterestEarned, 0),
                totalContributions: totalContributions
            });
        }

        return annualResults;
    }

    /**
     * Prints the investment results to the console.
     * 
     * @param {CalculationResult} results - The investment results, either an array of yearly results or an error message string.
     */
    static printResults(results: CalculationResult): void {
        if (typeof results === 'string') {
            console.log(results);
            return;
        }

        for (const yearEndResult of results) {
            console.log(yearEndResult.year);
            console.log(`Total Amount: $${yearEndResult.totalAmount.toFixed(0)}`);
            console.log(`Total Contributions: $${yearEndResult.totalContributions.toFixed(0)}`);
            console.log(`Total Interest Earned: $${yearEndResult.totalInterestEarned.toFixed(0)}`);
            console.log('-------------------------');
        }
    }
}