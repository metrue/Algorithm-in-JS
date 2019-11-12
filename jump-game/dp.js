const canJump = (nums) => {
  if (nums.length <= 1) {
    return true
  }

  // dp[i] define if we can jump to index i
  const dp = [true]
  const N = nums.length
  for (let i = 1; i < N ; i++) {
    dp[i] = false
    for (let k = 0; k < i; k++) {
      if (dp[k] && nums[k] >= i - k) {
        dp[i] = true
        continue
      }
    }
  }
  return dp[N - 1]
}
