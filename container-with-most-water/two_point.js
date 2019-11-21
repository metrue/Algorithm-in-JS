const maxArea = (height) => {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    const tmp = Math.min(height[i], height[j]) * (j - i)
    if (tmp > max) {
      max = tmp
    }
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}
