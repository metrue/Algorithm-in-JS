const ntoa = (n) => {
  const res = []
  for (let i = 1; i <= n; i++) {
    res.push(i)
  }
  return res
}

const ntofactorial = (n) => {
  const res = [1]
  let sum = 1
  for (let i = 1; i <= n; i++) {
    sum *= i
    res[i] = sum
  }
  return res
}

const getPermutation = (n, k) => {
  let pos = 0;
  let sb = ''

  let numbers = ntoa(n)
  const factorial = ntofactorial(n)

  k -= 1
  for (let i = 1; i <= n; i++) {
    const index = Math.floor(k / factorial[n-i])
    console.log(index)
    sb += numbers[index]
    numbers = [...numbers.slice(0, index), ...numbers.slice(index + 1)]
    k -= index * factorial[n-i]
  }
  return sb
}

console.log(getPermutation(4, 9))
