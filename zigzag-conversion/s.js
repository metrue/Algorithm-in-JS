const convert = (s, numRows) => {
  const L = s.length
  let current = 0
  let col = 0
  const output = []
  while (current < L) {
    // down
    for (let r = 0; r < numRows && current < L; r++) {
      if (output[r] === undefined) {
        output[r] = []
      }
      output[r][col] = s[current++]
    }

    // obliquely up
    for (let r = numRows - 2, c = col + 1; r > 0 && current < L; r--, c++) {
      output[r][c] = s[current++]
      col++
    }
    col++
  }

  let res = ''
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output[i].length; j++) {
      if (output[i][j]) {
        res += output[i][j]
      }
    }
  }
  return res
}

console.log(convert('PAYPALISHIRING', 3))
