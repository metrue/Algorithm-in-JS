const Node = require('../common/tree/binary_tree/node')
const bfs = require('./bfs')
const recursion = require('./recursion')

const n0 = new Node(0)
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
n0.left = n1
n0.right = n2
n1.right = n3
n2.left = n4

test('bfs', () => {
  expect(bfs(n0, 1, 2)).toBe(false)
  expect(bfs(n0, 3, 4)).toBe(true)
})

test('recursion', () => {
  expect(recursion(n0, 1, 2)).toBe(false)
  expect(recursion(n0, 3, 4)).toBe(true)
})
