const Stack = require('../common/stack/stack')

const nextGreaterElements = (nums) => {
  const stack = new Stack()
  const flag = {}
  for (let i = 0; i < nums.length * 2; i++) {
    let index = i < nums.length ? i : i % nums.length
    const cur = nums[index]
    while (stack.size() > 0 && stack.top().val < cur) {
      const pre = stack.pop()
      flag[`${pre.index}_${pre.val}`] = cur
    }

    stack.push({ index: i, val: cur })
  }

  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (flag[`${i}_${nums[i]}`] === undefined)  {
      res.push(-1)
    } else {
      res.push(flag[`${i}_${nums[i]}`])
    }
  }

  return res
}

const list = [-1, 0]
console.log(list)
console.log(nextGreaterElements(list))
