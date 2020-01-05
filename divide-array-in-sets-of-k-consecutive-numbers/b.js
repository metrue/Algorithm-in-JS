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

  const buckets = []
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i] -  nums[0]
    if (!buckets[index]) {
      buckets[index] = []
    }
    buckets[index].push(nums[i])
  }

  const res = []
  const N = nums.length / k
  for (let i = 0; i < N; i++) {
    const cur = []
    for (let j = 0; j < buckets.length && cur.length < k; j++) {
      if (buckets[j] && buckets[j].length > 0) {
        const n = buckets[j].pop()
        cur.push(n)
      } else {
        continue
      }
    }
    res.push(cur)
  }
  console.log(res)
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
// const list = [3,2,1,2,3,4,3,4,5,9,10,11]
// const k = 3
// console.log(isPossibleDivide(list, k))

// 1 2 3 4 5 6
//     3 4
