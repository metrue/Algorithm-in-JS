const canJump = (nums) => {
  let i = 0
  for (let maxPos = 0; i < nums.length && i <= maxPos; i++) {
    maxPos = Math.max(nums[i] + i, maxPos)
  }
  return i === nums.length
}
