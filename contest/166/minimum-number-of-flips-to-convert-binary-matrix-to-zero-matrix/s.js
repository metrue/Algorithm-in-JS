const Queue = require('../../../common/queue/queue')

const minFlips = (mat) => {
  const q = new Queue()
  q.enqueue({ state: mat, step: 0 })

  visited = {}

  const directions = [[0, 0], [-1, 0], [1, 0], [0, 1], [0, -1]]

  while (q.size() > 0) {
    const { state, step }= q.dequeue()
    if (isZeroMatrix(state)) {
      return step
    }

    if (visited[JSON.stringify(state)]) {
      continue
    }

    visited[JSON.stringify(state)] = true

    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[0].length; j++) {
        const nextState = state.map(row => [...row])
        directions.forEach(d => {
          flip(nextState, i + d[0], j + d[1])
        })
        q.enqueue({ state: nextState, step: step + 1})
      }
    }
  }

  return -1
}

const isZeroMatrix = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] !== 0) {
        return false
      }
    }
  }
  return true
}

const flip = (mat, i, j) => {
  if (i < mat.length && i >= 0 && j < mat[0].length && j >= 0) {
    if (mat[i][j] === 0) {
      mat[i][j] = 1
    } else {
      mat[i][j] = 0
    }
  }
}

console.log(minFlips([[0, 0], [0, 1]]))
console.log(minFlips([[1, 1, 1], [1, 0, 1], [0, 0, 0]]))
console.log(minFlips([[1, 0, 0], [1, 0, 0]]))
