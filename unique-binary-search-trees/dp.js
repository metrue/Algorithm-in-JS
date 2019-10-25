const numTrees = (n) => {
  const dp = []

  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    dp[i] = 0
    for (let j = 1; j <= i; j++) {
      const left = j - 1
      const right = i - j
      dp[i] += dp[left]*dp[right];
    }
  }
  return dp[n]
}

console.log(numTrees(4))
