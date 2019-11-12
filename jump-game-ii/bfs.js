const jump = (nums) => {
  if (nums.length <= 1) {
    return 0
  }

  let steps = 1
  let pos = 0
  let maxPos = 0

  for (let i = 0; i <= pos; i++) {
    maxPos = Math.max(maxPos, nums[i] + i)
    if (maxPos >= nums.length - 1) {
      return steps
    }

    if (i === pos) {
      pos = maxPos
      steps++
    }
  }
  return Infinity
}

console.log(jump([2,3,1, 1, 4]))
