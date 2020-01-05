const xorQueries = (arr, queries) => {
  const prefix = [0]
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = arr[i] ^ prefix[i]
  }

  res = []
  for (const q of queries) {
    const [left, rigth] = q
    res.push(prefix[left] ^ prefix(rigth + 1))
  }
  return res
}
