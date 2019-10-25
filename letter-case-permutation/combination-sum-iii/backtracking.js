const combinationSum3 = function(k, n) {
  const res = []
  const path = []
  backtracking(k, n, 1, path, res)
  return res
};

const backtracking = (k, n, start, path, res) => {
  if (n === 0 && path.length === k) {
    res.push(path)
    return
  }

  if (start > n) {
    return
  }

  for (let i = start; i <= 9; i++) {
    if (path.indexOf(i) === -1) {
      backtracking(k, n - i, i + 1, [...path, i], res)
    }
  }
}


console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
