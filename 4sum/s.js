const sort = (nums = []) => {
  return nums.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}

// sorted nums
const twoSum = (nums, target) => {
  const res = []
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++
      continue
    }

    if (j < nums.length - 1 && nums[j] === nums[j +1]) {
      j--
      continue
    }

    const cur = nums[i] + nums[j]
    if (cur > target) {
      j--
    } else if (cur < target) {
      i++
    } else {
      res.push([nums[i], nums[j]])
      i++
      j--
    }
  }
  return res
}

const threeSum = (nums, target) => {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    const list = nums.slice(i + 1)
    const candidates = twoSum(list, target - nums[i])
    for (const c of candidates) {
      res.push([nums[i], ...c])
    }
  }
  return res
}

const fourSum = (nums, target) => {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    const list = threeSum(nums.slice(i + 1), target - nums[i])
    for (const c of list) {
      res.push([nums[i], ...c])
    }
  }
  return res
}

const nums = [-2,0,0,2,2]
const t = 0
console.log(threeSum(sort(nums), t))
