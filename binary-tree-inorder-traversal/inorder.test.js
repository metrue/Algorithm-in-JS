const iterative = require('./iterative')
const recursion = require('./recursion')

class BTNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

test('iterative', () => {
  const n0 = new BTNode(0)
  const n1 = new BTNode(1)
  const n2 = new BTNode(2)
  const n3 = new BTNode(3)

  n0.left = n1
  n0.right = n2
  n1.right = n3

  const res = iterative(n0)
  expect(res).toEqual([1, 3, 0, 2])
})

test('recursion', () => {
  const n0 = new BTNode(0)
  const n1 = new BTNode(1)
  const n2 = new BTNode(2)
  const n3 = new BTNode(3)

  n0.left = n1
  n0.right = n2
  n1.right = n3

  const res = recursion(n0)
  expect(res).toEqual([1, 3, 0, 2])
})
