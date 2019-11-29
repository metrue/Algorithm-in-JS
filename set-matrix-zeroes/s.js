const setZeroes = (matrix) => {
  const col = []
  const row = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        col[j] = 0
        row[i] = 0
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (row[i] === 0 || col[j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
}
