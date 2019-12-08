const ntoa = (n) => {
  const res = []
  while (n > 0) {
    res.push(n % 10)
    n = Math.floor(n / 10)
  }
  return res
}

const subtractProductAndSum = (n) => {
  const nums = ntoa(n)
  return nums.reduce((acc, cur) => acc * cur, 1) - nums.reduce((acc, cur) => acc + cur , 0)
}
