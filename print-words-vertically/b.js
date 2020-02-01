const printVertically = (s) => {
  const words = s.split(/\s+/)
  const res = []
  words.forEach((w, col) => {
    w.split('').forEach((c, row) => {
      if (res[row] === undefined) {
        res[row] = ''
      }
      if (!res[row]) {
        res[row] = ' '.repeat(col)
      } 
      if (res[row].length !== col) {
        res[row] += ' '.repeat(col - res[row].length)
      }
      res[row] += c
    })
  })
  return res
}
