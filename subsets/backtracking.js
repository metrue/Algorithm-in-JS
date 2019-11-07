const subsets = (nums) => {
  const res = []
  backtracking(nums, [], res)
  return res
}

const backtracking = (nums, path, res) => {
  if (nums.length <= 0) {
    res.push(path)
    return
  }

  backtracking(nums.slice(1), [...path, nums[0]], res)
  backtracking(nums.slice(1), path, res)
}
