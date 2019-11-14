const solve = (A, B, C, D) => {
  const res = new Set()
  dfs([A, B, C, D], 0, '', res)
  return res.size
}

const dfs = (candidates, pos, path, res) => {
  if (pos > 3) {
    res.add(path)
    return
  }

  for (let i = 0; i < candidates.length; i++) {
    const cur = candidates[i]
    if (pos === 0) {
      if (cur >= 0 && cur <= 2) {
        dfs(candidates.filter(c => c !== cur), pos + 1, path + cur, res)
      }
    }

    if (pos === 1) {
      if (path === '2') {
        if (cur >= 0 && cur <= 3) {
          dfs(candidates.filter(c => c !== cur), pos + 1, path + cur, res)
        }
      } else {
        dfs(candidates.filter(c => c !== cur), pos + 1, path + cur, res)
      }
    }

    if (pos === 2) {
      if (cur >= 0 && cur <= 5) {
        dfs(candidates.filter(c => c !== cur), pos + 1, path + cur, res)
      }
    }

    if (pos === 3) {
      dfs(candidates.filter(c => c !== cur), pos + 1, path + cur, res)
    }
  }
}
