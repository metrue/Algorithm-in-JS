const ntoa = (n) => {
  const res = []
  while (n > 0) {
    res.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return res
}

const findNumbers = (nums) => {
  return nums.filter(n => ntoa(n).length % 2 === 0).length
}

const ret = findNumbers([12,345,2,6,7896])
console.log(ret)
