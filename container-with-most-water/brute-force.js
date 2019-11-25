const maxArea = function(height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++ )  {
      const tmp = Math.min(height[i], height[j]) * (j - i)
      if (tmp > max) {
        max = tmp
      }
    }
  }
  return max
}
