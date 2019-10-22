const combinationSum2 = function(candidates, target) {
  const res = []
  getCombinationSum(candidates.sort(), target, 0, [], res)
  return res
};

const getCombinationSum = (candidates, target, start, path, res) => {
  if (target === 0) {
    res.push(path)
    return
  }

  if (target < 0) {
    return
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i-1]) {
      continue
    }
    getCombinationSum(candidates, target - candidates[i], i + 1, [...path, candidates[i]], res)
  }
}
