const permute = function(nums) {
  const res = []
  exchange(nums, 0, res)
  return res
}

const swap = (nums, i, j) => {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

const exchange = (nums, start, res) => {
  if (start === nums.length) {
    res.push([...nums])
  }

  for (let i = start; i < nums.length; i++) {
    swap(nums, start, i)
    exchange(nums, start + 1, res)
    swap(nums, i, start)
  }
}

const s = permute([0,1, 2])
console.log(s)
