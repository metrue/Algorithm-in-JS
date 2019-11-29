const generateMatrix = (n) => {
  let k = 1
  let i = 0
  const matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = []
  }

  while (k <= n * n) {
    // left -> right
    let j = i
    while (j < n - i) {
      matrix[i][j++] = k++
    }

    // top -> botton
    j = i + 1
    while (j < n - i) {
      matrix[j++][n - i - 1] = k++
    }

    // right -> left
    j = n - i - 2
    while (j > i) {
      matrix[n - i - 1][j--] = k++
    }

    // bottom -> top
    j = n - i - 1
    while (j > i) {
      matrix[j--][i] = k++
    }
    i++
  }
  return matrix
}

console.log(generateMatrix(3))
