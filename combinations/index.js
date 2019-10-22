const combineDP = (n, k) => {
  if (k == 0) {
    return []
  }

  if (k == 1) {
    const ret = []
    for (let i = 1; i <= n; i++) {
      ret.push([i])
    }
    return ret
  }

  const sub = combineDP(n, k - 1)
  const res = []
  for (const s of sub) {
    for (let i = s[s.length - 1]; i <= n; i++) {
      if (s.indexOf(i) === -1) {
        res.push([...s, i])
      }
    }
  }
  return res
}

const combineBacktracking = (n, k) => {
  const res = []
  backtracking(n, k, 1, [], res)
  return res
}

const backtracking = (n, k, start, path, res) => {
  if (k === 0){
    res.push(path)
    return
  }
  for(let i = start; i <= n; i+=1) {
    backtracking(n, k - 1, i + 1, [...path, i], res)
  }
}

module.exports = {
  combineDP,
  combineBacktracking,
}
