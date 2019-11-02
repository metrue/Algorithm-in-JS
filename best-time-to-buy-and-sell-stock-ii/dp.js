const maxProfix = (prices) => {
  if (prices.length <= 1) {
    return 0
  }

  dp = [0]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 1] + prices[i] - prices[i - 1])
  }
  return dp[prices.length - 1]
}
