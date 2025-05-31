/**
 * Represents the input data required for an investment calculation.
 *
 * @property {number} initialAmount - The initial investment amount.
 * @property {number} annualContribution - The amount contributed to the investment each year.
 * @property {number} expectedReturn - The expected annual return rate as a percentage (e.g., 5 for 5%).
 * @property {number} duration - The total duration of the investment in years.
 */
export type InvestmentData = {
    initialAmount: number; // Initial investment amount
    annualContribution: number; // Annual contribution to the investment
    expectedReturn: number; // Expected annual return rate (in percentage)
    duration: number; // Investment duration in years
};

/**
 * Represents the result of an investment calculation for a specific year.
 *
 * @property year - The year of the investment as a string.
 * @property totalAmount - The total amount accumulated at the end of the year.
 * @property totalContributions - The sum of all contributions made by the end of the year.
 * @property totalInterestEarned - The total interest earned by the end of the year.
 */
export type InvestmentResult = {
    year: string; // Year of the investment
    totalAmount: number; // Total amount at the end of the year
    totalContributions: number; // Total contributions made by the end of the year
    totalInterestEarned: number; // Total interest earned by the end of the year
};

/**
 * Represents the result of a calculation, which can either be an array of `InvestmentResult` objects
 * or a string describing an error or message.
 *
 * @typedef {InvestmentResult[] | string} CalculationResult
 */
export type CalculationResult = InvestmentResult[] | string;