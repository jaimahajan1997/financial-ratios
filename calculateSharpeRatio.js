/**
 * Calculates the Sharpe Ratio, a risk-adjusted return metric.
 *
 * @param {number} riskFreeRate The risk-free rate of return (e.g., annualized treasury bill yield).
 * @param {number} averageReturn The average return of the investment.
 * @param {number} standardDeviation The standard deviation of the investment's returns.
 * @returns {number} The Sharpe Ratio, or NaN if standard deviation is zero.
 */
function calculateSharpeRatio(riskFreeRate, averageReturn, standardDeviation) {
  if (standardDeviation === 0) {
    return NaN; // Avoid division by zero
  }
  return (averageReturn - riskFreeRate) / standardDeviation;
}
