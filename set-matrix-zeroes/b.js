const setZeroes = (matrix) => {
  let hasZeroFirstColumn = false
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      hasZeroFirstColumn = true
      break
    }
  }

  let hasZeroFirstRow = false
  for (let j = 0; j < matrix[0].length; ++j) {
    if (matrix[0][j] === 0) {
      hasZeroFirstRow = true
      break
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (hasZeroFirstColumn) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
  if (hasZeroFirstRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }
}
