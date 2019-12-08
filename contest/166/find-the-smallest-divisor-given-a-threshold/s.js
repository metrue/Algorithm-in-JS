const smallestDivisor = (nums, threshold) => {
  let left = 1
  let right = Math.max(...nums) + 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    const sum = nums.reduce((acc, cur) => {
      return acc + Math.ceil(cur / mid)
    }, 0)
    if (sum <= threshold) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
