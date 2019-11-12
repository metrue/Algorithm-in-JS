const searchMatrix = (matrix, target) => {
  if (matrix.length <= 0) {
    return false
  }
  const M = matrix.length
  const N = matrix[0].length

  let i = 0
  let j = N - 1
  while (i < M && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    }
    if (target > matrix[i][j]) {
      i++
    } else {
      j--
    }
  }

  return false
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 5
console.log(searchMatrix(matrix, target))
console.log(searchMatrix([[-5]], -5))
console.log(searchMatrix([[1, 1]], 2))
