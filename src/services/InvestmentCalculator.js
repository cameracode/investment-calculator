"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentCalculator = void 0;
/**
 * A class to represent and calculate investment growth over time.
 */
class InvestmentCalculator {
    /**
     * Represents the input data required for an investment calculation.
     */
    investmentData;
    constructor(data) {
        this.investmentData = data;
    }
    /**
     * Calculates the yearly investment growth based on the provided data.
     *
     * @returns {CalculationResult} - An array of yearly investment results or an error message string.
     */
    calculate() {
        const { initialAmount, annualContribution, expectedReturn, duration } = this.investmentData;
        if (initialAmount < 0)
            return 'Initial investment amount must be at least zero';
        if (duration <= 0)
            return 'No valid amount of years provided.';
        if (expectedReturn <= 0)
            return 'Expected return must be at least zero';
        let total = initialAmount;
        let totalContributions = 0;
        let totalInterestEarned = 0;
        const annualResults = [];
        for (let i = 0; i < duration; i++) {
            total = total * (1 + expectedReturn); // Apply annual return
            totalContributions += annualContribution; // Increment contributions correctly
            totalInterestEarned = total - totalContributions - initialAmount; // Calculate interest earned
            total = total + annualContribution; // Add annual contribution to total
            annualResults.push({
                year: `Year ${i + 1}`,
                totalAmount: total,
                totalInterestEarned: Math.max(totalInterestEarned, 0), // Ensure interest earned is not negative
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
    static printResults(results) {
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
exports.InvestmentCalculator = InvestmentCalculator;
