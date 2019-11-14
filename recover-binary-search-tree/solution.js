const Node = require('../common/tree/binary_tree/node')

const solve = (root) => {
  const res = { pre: null, first: null, second: null }
  inorder(root, res)
  swap(res.first, res.second)
}

const swap = (n1, n2) => {
  const tmp = n1.val
  n1.val = n2.val
  n2.val = tmp
}

const inorder = (node, res) => {
  if (!node) {
    return
  }

  inorder(node.left, res)

  // find the first and the second node
  if (res.pre !== null) {
    if (res.first === null) {
      if (node.val <= res.pre.val) {
        res.first = res.pre
      }
    }
    if (res.first !== null) {
      if (node.val <= res.pre.val) {
        res.second = node
      }
    }
  }
  res.pre = node

  inorder(node.right, res)
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)

n3.left = n1
n3.right = n4
n4.left = n2

solve(n3)
console.log(n3)

// 1 3 2 4
