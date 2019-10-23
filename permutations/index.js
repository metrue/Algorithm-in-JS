const permute = function(nums) {
  const res = []
  const path = []
  const start = 0
  backtracking(nums, start, path, res)
  return res
}

const backtracking = (nums, start, path, res) => {
  if (path.length === nums.length) {
    res.push(path)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (path.indexOf(nums[i]) === -1) {
      backtracking(nums, start+1, [...path, nums[i]], res)
    }
  }
}

const s = permute([0,1, 2])
console.log(s)
