const hasTargetSum = (arr, sum) => {
  const flag = {}
  arr.forEach(c => flag[c] = true)
  for (const val of arr) {
    if (flag[sum - val] === true) {
      return 1
    }
  }
  return 0
}

module.exports = hasTargetSum
