const merge = (intervals = []) => {
  if (intervals.length === 0) {
    return []
  }
  intervals = intervals.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    } else if (a[0] < b[0]) {
      return -1
    } else {
      return 0
    }
  })

  const res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    const pre = res[res.length - 1]
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], cur[1])
    } else {
      res.push(cur)
    }
  }
  return res
}

const r = merge([[1,3],[2,6],[8,10],[15,18]])
console.log(r)
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1, 4],[2, 3]]))
