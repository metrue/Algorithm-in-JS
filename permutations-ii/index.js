const permuteUnique = (nums) => {
  const res = []
  const path = []
  const start = 0
  nums.sort()
  permute(nums, nums.length, start, path, res)
  return res
};

const permute = (nums, target, start, path, res) => {
  if (path.length === target) {
    res.push(path)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    const set = nums.slice()
    set.splice(i, 1)
    permute(set, target, start + 1, [...path, nums[i]], res)
  }
}

const s = permuteUnique([1, 1, 2])
console.log(s)
