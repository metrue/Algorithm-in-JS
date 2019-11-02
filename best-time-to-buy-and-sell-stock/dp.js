const maxProfit = (prices) => {
  if (prices.length <= 0) {
    return 0
  }
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < min) {
      min = prices[i - 1]
    }
    max = Math.max(max, prices[i] - min)
  }
  return max
}

console.log(maxProfit([7,1,5,3,6,4]))
