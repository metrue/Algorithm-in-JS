const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) {
    return false
  }

  const M = matrix.length
  const N = matrix[0].length

  let start = 0
  let end = M * N - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const i = Math.floor(mid / N)
    const j = mid % N

    if (target < matrix[i][j]) {
      end = mid - 1
    } else if (target > matrix[i][j]) {
      start = mid + 1
    } else {
      return true
    }
  }
  return false
}

module.exports = searchMatrix
