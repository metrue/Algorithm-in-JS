const permute = function(nums) {
  const res = []
  const path = []
  dict_permute(nums.sort(), path, res)
  return res
}

const dict_permute = (nums, path, res) => {
  if (nums.length === 0) {
    res.push(path)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    dict_permute([...nums.slice(0, i), ...nums.slice(i+1)], [...path, nums[i]], res)
  }
}

console.log(permute([1,2, 3]))
