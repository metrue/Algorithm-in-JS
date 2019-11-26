const rotate = (matrix) => {
  const N = matrix.length
  if (N <= 1) {
    return matrix
  }

  // reverse up-down
  for (let i = 0, j = N - 1; i < j; i++, j--) {
    const tmp = matrix[i]
    matrix[i] = matrix[j]
    matrix[j] = tmp
  }

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
}

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
rotate(matrix)
console.log(matrix)
