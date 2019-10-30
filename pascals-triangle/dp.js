const generate =(numRows) => {
  const res = []
  for (let i = 0; i < numRows; i++) {
    res[i] = []
    for (j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        res[i][j] = 1
      } else {
        res[i][j] = res[i - 1][j -1] + res[i-1][j]
      }
    }
  }
  return res
}

