const pow = (x, n) => {
  if (n === 0) {
    return 1
  }

  const p = Math.abs(n)
  const res = p % 2 === 0 ? pow(x * x,  p / 2) : pow(x * x, (p - 1) / 2) * x

  return n < 0 ? 1 / res : res
}
