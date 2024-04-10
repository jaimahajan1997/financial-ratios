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

/**
 * Calculates the Treynor Ratio, a risk-adjusted performance measure for diversified portfolios.
 *
 * @param {number} averageReturn The average return of the investment.
 * @param {number} marketReturn The average return of the market benchmark.
 * @param {number} beta The beta coefficient of the investment (relative volatility compared to market).
 * @returns {number} The Treynor Ratio, or NaN if beta is zero.
 */
function calculateTreynorRatio(averageReturn, marketReturn, beta) {
  if (beta === 0) {
    return NaN; // Avoid division by zero
  }
  return (averageReturn - marketReturn) / beta;
}

/**
 * Calculates the Sortino Ratio, a risk-adjusted return metric focusing on downside risk.
 *
 * @param {number} riskFreeRate The risk-free rate of return.
 * @param {number} averageReturn The average return of the investment.
 * @param {number} downsideDeviation The standard deviation of negative investment returns.
 * @returns {number} The Sortino Ratio, or NaN if downside deviation is zero.
 */
function calculateSortinoRatio(riskFreeRate, averageReturn, downsideDeviation) {
  if (downsideDeviation === 0) {
    return NaN; // Avoid division by zero
  }
  return (averageReturn - riskFreeRate) / downsideDeviation;
}

/**
 * Calculates the Enterprise Value (EV) to EBITDA Ratio, used to assess company valuation.
 *
 * @param {number} enterpriseValue The enterprise value of the company.
 * @param {number} ebitda The company's earnings before interest, taxes, depreciation, and amortization.
 * @returns {number} The EV/EBITDA Ratio, or NaN if EBITDA is zero.
 */
function calculateEnterpriseValueToEBITDA(enterpriseValue, ebitda) {
  if (ebitda === 0) {
    return NaN; // Avoid division by zero
  }
  return enterpriseValue / ebitda;
}

/**
 * Calculates the Price-to-Book Ratio (P/B), a valuation metric comparing stock price to book value.
 *
 * @param {number} stockPrice The current stock price.
 * @param {number} bookValuePerShare The company's book value per share.
 * @returns {number} The Price-to-Book Ratio, or NaN if book value is zero.
 */
function calculatePriceToBook(stockPrice, bookValuePerShare) {
  if (bookValuePerShare === 0) {
    return NaN; // Avoid division by zero
  }
  return stockPrice / bookValuePerShare;
}

/**
 * Calculates the Graham Number, a valuation metric based on earnings, EPS growth, and bond yield.
 *
 * @param {number} earningsPerShare The company's earnings per share.
 * @param {number} epsGrowthRate The company's earnings per share growth rate (decimal).
 * @param {number} bondYield The current yield of a long-term government bond (decimal).
 * @returns {number} The Graham Number, or NaN if earnings or bond yield is zero.
 */
function calculateGrahamNumber(earningsPerShare, epsGrowthRate, bondYield) {
  if (earningsPerShare === 0 || bondYield === 0) {
    return NaN; // Avoid division by zero
  }
  const squareRoot = Math.sqrt(22.5); // Constant factor in Graham Number formula
  return (earningsPerShare * (1 + epsGrowthRate) * squareRoot) / bondYield;
}

/**
 * Calculates the expected return of an asset based on the CAPM model.
 *
 * @param {number} riskFreeRate The risk-free rate of return (e.g., annualized treasury bill yield).
 * @param {number} marketReturn The average return of the market benchmark.
 * @param {number} beta The beta coefficient of the asset (relative volatility compared to market).
 * @returns {number} The expected return of the asset.
 */
function calculateExpectedReturnCAPM(riskFreeRate, marketReturn, beta) {
  return riskFreeRate + beta * (marketReturn - riskFreeRate);
}

/**
 * Calculates the Altman Z-Score, a bankruptcy prediction metric.
 *
 * @param {number} workingCapital Working capital of the company.
 * @param {number} retainedEarnings Retained earnings of the company.
 * @param {number} totalAssets Total assets of the company.
 * @param {number} marketValueEquity Market value of the company's equity.
 * @param {number} totalLiabilities Total liabilities of the company.
 * @returns {number} The Altman Z-Score.
 */
function calculateAltmanZScore(
  workingCapital,
  retainedEarnings,
  totalAssets,
  marketValueEquity,
  totalLiabilities
) {
  const numerator =
    (1.2 * workingCapital) / totalAssets +
    (1.4 * retainedEarnings) / totalAssets +
    (3.3 * marketValueEquity) / totalLiabilities +
    (0.6 * (totalAssets - totalLiabilities)) / totalLiabilities;
  const denominator = marketValueEquity / totalLiabilities;
  return numerator / denominator;
}

/**
 * Calculates the intrinsic value of a stock based on the Dividend Discount Model (DDM) using the Gordon Growth Model.
 *
 * @param {number} currentDividend The current annual dividend per share.
 * @param {number} growthRate The expected dividend growth rate (decimal).
 * @param {number} discountRate The required rate of return for the investment (cost of equity).
 * @returns {number} The intrinsic value of the stock.
 */
function calculateGordonIntrinsicValueDDM(
  currentDividend,
  growthRate,
  discountRate
) {
  if (discountRate <= growthRate) {
    return NaN; // Avoid division by zero or negative intrinsic value
  }
  return currentDividend / (discountRate - growthRate);
}

export {
  calculateSharpeRatio,
  calculateTreynorRatio,
  calculateSortinoRatio,
  calculateEnterpriseValueToEBITDA,
  calculatePriceToBook,
  calculateGrahamNumber,
  calculateExpectedReturnCAPM,
  calculateAltmanZScore,
  calculateGordonIntrinsicValueDDM,
};
