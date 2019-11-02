const maxProfit = (k, prices) => {
  if (k >= Math.floor(prices.length / 2)) {
    return quickSolve(prices)
  }

  // b[k] max profix with at most 'k' transactions with last operation is BUY
  // s[k] max profix with at most 'k' transactions with last operation is SELL
  const s = []
  const b = []
  for (let i = 0; i < prices.length; i++) {
    s[i] = 0
    b[i] = -Infinity
  }
  for (const p of prices) {
    for (let i = k; i > 0; i--) {
			s[i] = Math.max(s[i], b[i] + p)
			b[i] = Math.max(b[i], s[i - 1] -p)
    }
  }

  return s[k]
}

const quickSolve = (prices) => {
  if (prices.length <= 1) {
    return 0
  }

  const dp = [0]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-1] - prices[i-1] + prices[i])
  }
  return dp[prices.length - 1]
}

console.log(maxProfit(2, [1, 2, 3, 4, 5, 9]))
