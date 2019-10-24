const letterCasePermutation = (s) => {
  const res = []
  backtracking(s, 0, '', res)
  return res
}

const backtracking = (s, start, path, res) => {
  if (path.length === s.length) {
    res.push(path)
    return
  }

  if (start >= s.length) {
    return
  }

  for (let i = start; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i].toLowerCase()) {
      backtracking(s, i + 1, path + s[i], res)
    } else {
      backtracking(s, i + 1, path + s[i].toLowerCase(), res)
      backtracking(s, i + 1, path + s[i].toUpperCase(), res)
    }
  }
}
