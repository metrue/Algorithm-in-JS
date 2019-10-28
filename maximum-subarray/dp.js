const maxSubArray = (nums) => {
  if (nums.length <= 1) {
    return nums
  }

  const dp = []
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i]
  }

  return dp.reduce((acc, cur) => acc > cur ? acc : cur, dp[0])
};
