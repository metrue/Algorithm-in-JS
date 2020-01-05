const xorQueries = (arr, queries) => {
  const res = []
  for (const q of queries) {
    const [left, rigth] = q
    res.push(xor(arr, left, rigth))
  }
  return res
}

const xor = (arr, left, rigth) => {
  let res = arr[left]
  for (let i = left + 1; i <= rigth; i++) {
    res ^= arr[i]
  }
  return res
}
