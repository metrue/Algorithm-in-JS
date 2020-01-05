const ntoa = (n) => {
  const res = []
  while (n > 0) {
    res.unshift(n % 10)
    n = Math.floor(n / 10)
  }
  return res
}

const isSeq = (n) => {
  const arr = ntoa(n)
  if (arr.length <= 1) {
    return false
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i-1] != 1) {
      return false
    }
  }
  return true
}

const sequentialDigits = (low, high) => {
  const res = []
  for (let i = low; i <= high; i++) {
    if (isSeq(i)) {
      res.push(i)
    }
  }
  return res
}

