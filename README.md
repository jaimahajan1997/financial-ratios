# financial-ratios
An npm package to compute various financial ratios based on stock data provided


Current utilities-

1. calculateSharpeRatio
2. calculateTreynorRatio
3. calculateSortinoRatio
4. calculateEnterpriseValueToEBITDA
5. calculatePriceToBook
6. calculateGrahamNumber
7. calculateExpectedReturnCAPM
8. calculateAltmanZScore
9. calculateGordonIntrinsicValueDDM

Note: If any error related to ES module rename file with .mjs extension instead of .js

Example Usage-

```javascript
// Importing functions from the finance module
import {
    calculateSharpeRatio,
    calculateTreynorRatio,
    calculateSortinoRatio,
    calculateEnterpriseValueToEBITDA,
    calculatePriceToBook,
    calculateGrahamNumber,
    calculateExpectedReturnCAPM,
    calculateAltmanZScore,
    calculateGordonIntrinsicValueDDM,
  } from 'financial-ratios';

// Test values
const riskFreeRate = 0.02; // 2%
const averageReturn = 0.1; // 10%
const standardDeviation = 0.15; // 15%
const marketReturn = 0.08; // 8%
const beta = 1.2;
const downsideDeviation = 0.12; // 12%
const enterpriseValue = 5000000;
const ebitda = 1000000;
const stockPrice = 50;
const bookValuePerShare = 25;
const earningsPerShare = 5;
const epsGrowthRate = 0.05; // 5%
const bondYield = 0.03; // 3%
const workingCapital = 2000000;
const retainedEarnings = 1500000;
const totalAssets = 10000000;
const marketValueEquity = 4000000;
const totalLiabilities = 6000000;
const currentDividend = 2;
const growthRate = 0.06; // 6%
const discountRate = 0.1; // 10%

// Testing each function with mock values
console.log(
  "Sharpe Ratio:",
  calculateSharpeRatio(riskFreeRate, averageReturn, standardDeviation)
);
console.log(
  "Treynor Ratio:",
  calculateTreynorRatio(averageReturn, marketReturn, beta)
);
console.log(
  "Sortino Ratio:",
  calculateSortinoRatio(riskFreeRate, averageReturn, downsideDeviation)
);
console.log(
  "Enterprise Value to EBITDA Ratio:",
  calculateEnterpriseValueToEBITDA(enterpriseValue, ebitda)
);
console.log(
  "Price to Book Ratio:",
  calculatePriceToBook(stockPrice, bookValuePerShare)
);
console.log(
  "Graham Number:",
  calculateGrahamNumber(earningsPerShare, epsGrowthRate, bondYield)
);
console.log(
  "Expected Return (CAPM):",
  calculateExpectedReturnCAPM(riskFreeRate, marketReturn, beta)
);
console.log(
  "Altman Z-Score:",
  calculateAltmanZScore(
    workingCapital,
    retainedEarnings,
    totalAssets,
    marketValueEquity,
    totalLiabilities
  )
);
console.log(
  "Intrinsic Value (DDM):",
  calculateGordonIntrinsicValueDDM(currentDividend, growthRate, discountRate)
);