const combinationSum = (candidates, target) => {
  const results = []
  getCombinationSum(0, candidates, target, results)
  return results
};

const getCombinationSum = (startIndex, candidates = [], target, results = []) => {
  if (startIndex === candidates.length) {
    return
  }

  const cur = candidates[startIndex]
  if (target < cur) {
    return getCombinationSum(startIndex+1, candidates, target, results)
  }

  if (target % cur === 0) {
    const res = []
    for (let i = 0; i < target / cur; i++) {
      res.push(cur)
    }
    results.push(res)
  }

  for (let j = 0; j <= Math.floor(target / cur); j++) {
    const subResults = []
    const newTarget = target - cur * j
    getCombinationSum(startIndex+1, candidates, newTarget, subResults)
    for (const res of subResults) {
      for (let i = 0; i < j; i++) {
        res.unshift(cur)
      }
      results.push(res)
    }
  }

  return results
}

module.exports = combinationSum
