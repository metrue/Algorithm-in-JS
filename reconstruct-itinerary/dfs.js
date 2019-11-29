const findItinerary = (tickets) => {
  const map = {}
  for (let i = 0; i < tickets.length; i++) {
    const from = tickets[i][0]
    const to = tickets[i][1]
    if (!map[from]) {
      map[from] = []
    }
    map[from].push(to)
  }

  for (const k of Object.keys(map)) {
    map[k].sort()
  }

  const res = []
  dfs(map, 'JFK', res)
  return res.reverse()
}

const dfs = (map, from, res) => {
  const to = map[from]
  while (to && to.length > 0) {
    dfs(map, to.shift(), res)
  }
  res.push(from)
}
