const ntoa = (n) => {
  const res = []
  for (let i = 1; i <= n; i++) {
    res.push(i)
  }
  return res
}

const getPermutation = (n, k) => {
  const res = []
  dfs(ntoa(n), n, '', res)
  return res[k]
}

const dfs = (arr, n, path, res) => {
  if (path.length === n) {
    res.push(path)
    return
  }

  for (let i = 0; i < arr.length; i++) {
    const list = arr.slice()
    dfs([...list.slice(0, i), ...list.slice(i+1)], n, path + arr[i], res)
  }
}

getPermutation(3, 3)
