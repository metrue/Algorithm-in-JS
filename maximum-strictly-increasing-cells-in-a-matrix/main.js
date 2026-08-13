// -9{1, 0}, 1{0, 1}, 3{0,0}, 5{1, 1}, 6{0, 2}, 7{1, 2}
//
//
// dp[i] =

const maxStrictlyIncreasing = (nums) => {
  if (nums.length === 0) return [];
  const dp = new Array(nums.length).fill([]);

  dp[0] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const last = dp[i - 1][dp[i - 1].length - 1];
  
    if (last.val < nums[i].val) {
      if (last.x === nums[i].x || last.y === nums[i].y) {
        dp[i] = dp[i - 1].concat(nums[i]);
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      dp[i] = dp[i - 1];
    }
  }

console.warn('++++')
console.warn(dp);
console.warn('++++')
  return dp[nums.length - 1];
};

module.exports = { maxStrictlyIncreasing };
