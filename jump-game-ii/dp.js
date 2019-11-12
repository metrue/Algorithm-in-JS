const jump = (nums) => {
  if (nums.length <= 1) {
    return 1
  }

  // dp[i] defines minimun steps jump from first to indx i
  dp = [0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Infinity
    for (let k = 0; k < i; k++) {
      if (dp[k] !== Infinity && nums[k] >= i - k) {
        if (dp[k] + 1 <= dp[i]) {
          dp[i] = dp[k] + 1
        }
      }
    }
  }

  return dp[nums.length - 1]
}
