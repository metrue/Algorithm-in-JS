const isPossibleDivide = (nums, k) => {
  nums = nums.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })

  if (nums.length % k !== 0) {
    return false
  }

  let left = nums.slice()
  const res = []
  while (left.length > 0) {
    const picked = [left[0]]
    for (let i = 1; i < left.length && picked.length < k; i++) {
      if (left[i] === left[i - 1]) {
        continue
      } else {
        picked.push(left[i])
      }
    }


    for (const pick of picked) {
      const index = left.indexOf(pick)
      left = [...left.slice(0, index), ...left.slice(index+1)]
    }
    res.push(picked)
  }
  return res.every(list => {
    if (list.length <= 1) {
      return false
    }
    for (let i = 1; i < list.length; i++) {
      if (list[i] - list[i - 1] !== 1) {
        return false
      }
    }
    return true
  })
}

console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4))
const list = [3,2,1,2,3,4,3,4,5,9,10,11]
const k = 3
console.log(isPossibleDivide(list, k))
