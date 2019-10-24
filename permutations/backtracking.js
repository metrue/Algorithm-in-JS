const permute = function(nums) {
  const res = []
  const path = []
  backtracking(nums, path, res)
  exchange(nums, 0, res)
  return res
}

const backtracking = (nums, path, res) => {
  if (path.length === nums.length) {
    res.push(path)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (path.indexOf(nums[i]) === -1) {
      backtracking(nums, [...path, nums[i]], res)
    }
  }
}

const s = permute([0,1, 2])
console.log(s)
