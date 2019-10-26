const bfs = require('./bfs')
const bruteforce = require('./bruteforce')
const Node = require('../common/tree/binary_tree/node')

const n0 = new Node(0)
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
n0.left = n1
n0.right = n2
n2.right = n3

test('bfs', () => {
  const res = [[0], [1, 2], [3]]
  const output = bfs(n0)
  expect(output).toEqual(res)
})

test('bruteforce', () => {
  const res = [[0], [1, 2], [3]]
  const output = bruteforce(n0)
  expect(output).toEqual(res)
})
