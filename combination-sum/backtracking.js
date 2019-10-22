const combinationSum = (candidates, target) => {
  const res = []
  backtracking(candidates, target, 0, [], res)
  return res
}

const backtracking = (candidates, target, start, path, res) => {
  if(target == 0 ){
    res.push(path)
    return
  }
  if (target < 0) {
    return
  }

  for(let i = start; i < candidates.length; i++){
    backtracking(candidates, target - candidates[i], i, [...path, candidates[i]], res);
  }
}

module.exports = combinationSum
