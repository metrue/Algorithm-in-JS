const sumZero = (n) => {
  const half = Math.floor(n / 2)
  const res = []
  for (let i = 1; i <= half; i++) {
    res.push(i, -i)
  }
  if (res.length < n) {
    res.push(0)
  }
  return res
}
