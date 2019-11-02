const maxSubArray = (nums) => {
  return getSubMaxSum(nums, 0, nums.length - 1)
}

const getCrossingSum = (nums, start, mid, end) => {
  let leftSum = -Infinity
  let rightSum = -Infinity
  for (let i = mid, sum = 0; i >= start; i--) {
    sum += nums[i]
    leftSum = Math.max(sum, leftSum)
  }

  for (let i = mid + 1, sum = 0; i <= end; i++) {
    sum += nums[i]
    rightSum = Math.max(sum, rightSum)
  }
  return Math.max(leftSum + rightSum, leftSum, rightSum)
}

const getSubMaxSum = (nums, start, end) => {
  if (start > end) {
    return -Infinity
  }

  const mid = Math.floor((start + end) / 2)
  // left max without mid
  const leftMaxSum = getSubMaxSum(nums, start, mid - 1)
  // right max without mid
  const rightMaxSum = getSubMaxSum(nums, mid + 1, end)
  // crossing max with mid
  const crossingSum = getCrossingSum(nums, start, mid, end)
  return Math.max(leftMaxSum, rightMaxSum, crossingSum)
}

module.exports = maxSubArray
