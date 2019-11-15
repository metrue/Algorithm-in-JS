var getRow = function(rowIndex) {
  if (rowIndex == 0) {
    return [1]
  }
  if (rowIndex == 1) {
    return [1, 1]
  }
  const dp = [[1], [1, 1]]
  for (let i = 2; i <= rowIndex; i++) {
    dp[i] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
      }
    }
  }
  return dp[rowIndex]
};

const ele = (rowIndex) => {
  const res = [1]
  for (let i = 1; i <= rowIndex; i++) {
    res.push(0)
    for (let j = i; j >= 1; j--) {
      res[j] += res[j-1]
    }
  }
  return res
}
