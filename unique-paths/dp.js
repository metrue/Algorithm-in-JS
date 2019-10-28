const uniquePaths = (m, n) => {
  const dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = 1
        continue
      }
      let count = 0;
      if (i - 1 >= 0) {
        count += dp[i-1][j]
      }
      if (j - 1 >= 0) {
        count += dp[i][j-1]
      }
      dp[i][j] = count
    }
  }
  return dp[m-1][n-1]
}

console.log(uniquePaths(3, 2))
