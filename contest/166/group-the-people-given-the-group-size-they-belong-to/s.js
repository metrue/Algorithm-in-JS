const groupThePeople = (groupSizes) => {
  const groups = {}
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i]
    if (!groups[size]) {
      groups[size] = []
    }
    let grouped = false
    for (const g of groups[size]) {
      if (g.length < size) {
        g.push(i)
        grouped = true
      }
    }
    if (!grouped) {
      groups[size].push([i])
    }
  }

  const res = []
  for (const k of Object.keys(groups)) {
    res.push(...groups[k])
  }
  return res
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]))
