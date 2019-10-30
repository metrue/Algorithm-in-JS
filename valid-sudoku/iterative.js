const rowKey = (row, val) => `${row}_(${val})`
const colKey = (col, val) => `(${val})_${col}`
const boxKey = (row, col, val) => {
  r = Math.floor(row / 3)
  c = Math.floor(col / 3)
  k = r * 3 + c
  return `[${k}]_${val}`
}

const isValidSudoku = (board) => {
  const flag = {}
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      const val = board[i][j]
      if (val === '.') {
        continue
      }
      const rk = rowKey(i, val)
      if (flag[rk]) {
        return false
      }
      flag[rk] = true

      const ck = colKey(j, val)
      if (flag[ck]) {
        return false
      }
      flag[ck] = true

      const bk = boxKey(i, j, val)
      if (flag[bk]) {
        return false
      }
      flag[bk] = true
    }
  }
  return true
}
