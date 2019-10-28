const uniquePathsWithObstacles = (obstacleGrid) => {
  const M = obstacleGrid.length
  const N = obstacleGrid[0].length
  if (obstacleGrid[0][0] === 1) {
    return 0
  }

  if (obstacleGrid[M - 1][N - 1] === 1) {
    return 0
  }

  dp = []
  for (let i = 0; i < M; i++) {
    if (dp[i] === undefined) {
      dp[i] = []
    }
    for (let j = 0; j < N; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : 1
        continue
      }
      dp[i][j] = 0
      if (i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1) {
        dp[i][j] += dp[i - 1][j]
      }
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1) {
        dp[i][j] += dp[i][j - 1]
      }
    }
  }
  return dp[M - 1][N - 1]
}
