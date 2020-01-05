const dfs = (low, high, path, res = []) => {
  if (path > high) {
    return
  } else {
    if (path >= low) {
      res.push(path)
    }
  }

  const last = path % 10
  if (last < 9) {
    next = last + 1
    dfs(low, high, path * 10 + next, res)
  }
}

const sequentialDigits = (low, high) => {
  const res = []
  for (let i = 1; i < 9; i++) {
    dfs(low, high, i, res)
  }
  return res.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
  })
}


const res = sequentialDigits(1000, 13000)
// generateSequential(100, 300, [2], res)
// generateSequential(100, 300, [3], res)
// generateSequential(100, 300, [4], res)
console.log(res)
