const Queue = require('../common/queue/queue')

class Cell {
  constructor(x, y, dist) {
    this.x = x
    this.y = y
    this.dist = dist
  }
}

const minDistance = (maxtrix) => {
  const visited = []

  let startX
  let startY
  let endX
  let endY
  for (let i = 0; i < maxtrix.length; i++) {
    visited[i] = []
    for (let j = 0; j < maxtrix[0].length; j++) {
      if (grid[i][j] === 's') {
         startX = i;
         startY = j;
      }
      if (grid[i][j] === 'd') {
        endX = i
        endY = j
      }
      if (grid[i][j] === '0') {
        visited[i][j] = true;
      } else {
        visited[i][j] = false;
      }
    }
  }

  return bfs(maxtrix, startX, startY, endX, endY, visited)
}
const bfs = (maxtrix, startX, startY, endX, endY, visited) => {
  console.log(startX, startY, endX, endY)
  const source = new Cell(startX, startY, 0)
  const q = new Queue()
  q.enqueue(source)
  visited[startX][startY] = true

  while (q.size() > 0) {
    const cur = q.dequeue()

    if (cur.x === endX && cur.y === endY) {
      return cur.dist
    }

    // up
    if (cur.x - 1 >= 0 && !visited[cur.x - 1][cur.y]) {
      q.enqueue(new Cell(cur.x - 1, cur.y, cur.dist + 1))
      visited[cur.x - 1][cur.y] = true
    }
    // down
    if (cur.x + 1 < maxtrix.length && !visited[cur.x + 1][cur.y]) {
      q.enqueue(new Cell(cur.x + 1, cur.y, cur.dist + 1))
      visited[cur.x + 1][cur.y] = true
    }

    // left
    if (cur.y - 1 >= 0 && !visited[cur.x][cur.y - 1]) {
      q.enqueue(new Cell(cur.x, cur.y - 1, cur.dist + 1))
      visited[cur.x][cur.y - 1] = true
    }
    // right
    if (cur.y + 1 < maxtrix[0].length && !visited[cur.x][cur.y + 1]) {
      q.enqueue(new Cell(cur.x, cur.y + 1, cur.dist + 1))
      visited[cur.x][cur.y + 1] = true
    }
  }
  return -1
}

const grid = [
  ['0', '*', '0', 's'],
  ['*', '0', '*', '*'],
  ['0', '*', '*', '*'],
  ['d', '*', '*', '*'],
]
console.log(minDistance(grid))
