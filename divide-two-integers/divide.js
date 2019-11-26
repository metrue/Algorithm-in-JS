const divide = (dividend, divisor) => {
  const isPositive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let res = 0
  while (dividend >= divisor) {
    let base = divisor
    let count = 1
    while (base <= (dividend >> 1)) {
      base = base << 1
      count = count << 1
    }
    res += count
    dividend -= base
  }

  res = isPositive ? res : -res
  return Math.min(Math.max(-Math.pow(2, 31), res), Math.pow(2, 31) - 1)
}
