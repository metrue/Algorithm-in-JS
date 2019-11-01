const divide = (dividend, divisor) => {
  let dividendAbs = Math.abs(dividend)
  const divisorAbs = Math.abs(divisor)

  let res = 0
  while (dividendAbs >= divisorAbs) {
    let curDivisor = divisorAbs
    let numOfdivisors = 1
    while (dividendAbs >= curDivisor) {
      dividendAbs -= curDivisor

      res += numOfdivisors

      curDivisor <<= 1
      numOfdivisors <<= 1
    }
  }

  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor <0)) {
  } else {
    res = -res
  }

  return Math.min(Math.max(-Math.pow(2, 31), res), Math.pow(2, 31) - 1)
}

let a = divide(10, 3)
console.log(a)
a = divide(10, -3)
console.log(a)
a = divide(7, -3)
console.log(a)
a = divide(-2147483646,2)
console.log(a)
