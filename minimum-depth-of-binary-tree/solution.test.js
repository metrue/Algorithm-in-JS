const dfs = require('./dfs')
const bfs = require('./bfs')
const bonus = require('./bonus')
const Node = require('../common/tree/binary_tree/node')

test('bfs', () => {
  const n0 = new Node(0)
  const n1 = new Node(1)
  const n2 = new Node(2)
  const n3 = new Node(3)

  n0.left = n1
  n0.right = n2
  n1.right = n3

  const res = bfs(n0)
  expect(res).toEqual(2)
})

test('dfs', () => {
  const n0 = new Node(0)
  const n1 = new Node(1)
  const n2 = new Node(2)
  const n3 = new Node(3)

  n0.left = n1
  n0.right = n2
  n1.right = n3

  const res = dfs(n0)
  expect(res).toEqual(2)
})

test('bonus', () => {
  const n0 = new Node(0)
  const n1 = new Node(1)
  const n2 = new Node(2)
  const n3 = new Node(3)

  n0.left = n1
  n0.right = n2
  n1.right = n3

  const res = bonus(n0)
  expect(res).toEqual(2)
})
