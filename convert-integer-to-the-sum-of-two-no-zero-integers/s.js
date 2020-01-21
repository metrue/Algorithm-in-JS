const getNoZeroIntegers = (n) => {
  for (let i = 1; i < n ; i++) {
    if (!hasZero(i) && !hasZero(n - i)) {
      return [i, n - i]
    }
  }
  return [-1, -1]
}

const hasZero = (n) => {
  return itoa(n).includes(0)
}

const itoa = (n) => {
  const res = []
  while (n > 0)  {
    res.push(n % 10)
    n = Math.floor(n / 10)
  }
  return res
}

console.log(getNoZeroIntegers(1010))
