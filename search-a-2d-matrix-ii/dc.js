const searchMatrix = (matrix, target) => {
  if (matrix.length <= 0) {
    return false
  }

  const M = matrix.length
  const N = matrix[0].length
  return helper(matrix, target, 0, 0, M - 1, N - 1)
}

const helper = (matrix, target, startRow, startCol, endRow, endCol) => {
  console.log(startRow, startCol, endRow, endCol)
  if (startRow > endRow || endCol > endCol) {
    return false
  }

  const midRow = Math.floor((startRow + endRow) / 2)
  const midCol = Math.floor((startCol + endCol) / 2)

  if (matrix[midRow][midCol] === target) {
    return true
  }

  if (matrix[midRow][midRow] > target) {
    return helper(matrix, target, startRow, startCol, midRow - 1, midCol - 1)
      || helper(matrix, target, startRow, midCol, midRow -1, endCol)
      || helper(matrix, target, midRow, startCol, endRow, midCol - 1)
  } else {
    return helper(matrix, target, startRow, midCol + 1, midRow, endCol)
        || helper(matrix, target, midRow + 1, startCol, endRow, midCod )
        || helper(matrix, target, midRow + 1, midCol + 1, endRow, endCol)
  }
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 5
console.log(searchMatrix(matrix, target))
console.log(searchMatrix([[-5]], -5))
console.log(searchMatrix([[1, 1]], 2))
