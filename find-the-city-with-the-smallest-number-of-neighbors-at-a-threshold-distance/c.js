const Heap = require('../common/heap/heap')

const findTheCity = (n, edges, distanceThreshold) => {
  const adjn = initAdjn(edges)

  const candidates = []
  for (let i = 0; i < n; i++) {
    const dist = dijkstra(i, adjn)
    const candidate = { id: i, cities: []}
    for (const k of Object.keys(dist)) {
      if (k !== String(i) && dist[k] <= distanceThreshold) {
        candidate.cities.push(k)
      }
    }
    candidates.push(candidate)
  }

  candidates.sort((a, b) => {
    if (a.cities.length > b.cities.length) {
      return 1
    } else if (a.cities.length < b.cities.length) {
      return -1
    } else {
      if (a.id < b.id) {
        return 1
      } else if (a.id > b.id) {
        return -1
      }
      return 0
    }
  })
  return candidates[0].id
}

const initAdjn = (edges) => {
  const adjn = {}
  edges.forEach(e => {
    const start = e[0]
    const next = e[1]
    const weight = e[2]
    if (!adjn[start]) {
      adjn[start] = []
    }
    if (!adjn[next]) {
      adjn[next] = []
    }
    adjn[next].push({
      node: start,
      weight,
    })
    adjn[start].push({
      node: next,
      weight,
    })
  })
  return adjn
}


const dijkstra = (start, adjn = {}) => {
  const q = new Heap((a, b) => a.weight < b.weight)
  q.push({ weight: 0, node: start })

  const dist = {}
  dist[start] = 0
  const visited = {}
  while (q.size() > 0) {
    const { node, weight } = q.pop()
    if (!visited[node]) {
      visited[node] = true
    } else {
      continue
    }

    if (!adjn[node]) {
      continue
    }
    for (const n of adjn[node]) {
      next = n.node
      nextWeight = n.weight

      if (visited[next]) {
        continue
      }

      if (!dist[next] || nextWeight + dist[node] < dist[next]) {
        dist[next] = nextWeight + dist[node]
        q.push({
          weight: dist[next],
          node: next,
        })
      }
    }
  }
  return dist
}
