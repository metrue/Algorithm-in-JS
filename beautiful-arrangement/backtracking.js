const ntoa = (n) => {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

const countArrangement = (N) => {
  const res = []
  const path = []
  backtracking(ntoa(N), [], res)
  return res.length
}

const isBeatiful = (val, index) => {
  return val % (index+1) === 0 || (index+1) % val === 0
}

const backtracking = (nums, path, res) => {
  if (nums.length === 0) {
    res.push(path)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (isBeatiful(nums[i], path.length)) {
      backtracking([...nums.slice(0, i), ...nums.slice(i+1)], [...path, nums[i]], res)
    }
  }
}

// console.log(countArrangement(1))
// console.log(countArrangement(2))
// console.log(countArrangement(3))
// console.log(countArrangement(4))
console.log(countArrangement(7))
