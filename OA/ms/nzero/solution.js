const solve = (N) => {
  const half = Math.floor(N / 2)
  const res = []
  for (let i = 0; i < half; i++) {
    res.push(half - i, i - half)
  }
  if (N % 2 !== 0) {
    res.push(0)
  }
  return res
}
