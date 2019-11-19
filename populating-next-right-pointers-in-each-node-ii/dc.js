const Node = require('../common/tree/binary_tree/node')

const fnext = (node) => {
  if (!node) {
    return node
  }
  if (node.left) {
    return node.left
  }

  if (node.right) {
    return node.right
  }
  return fnext(node.next)
}

const connect = (root) => {
  if (!root) {
    return root
  }
  if (root.left) {
    if (root.right) {
      root.left.next = root.right
    } else {
      root.left.next = fnext(root.next)
    }
  }

  if (root.right) {
      root.right.next = fnext(root.next)
  }

  connect(root.right)
  connect(root.left)

  return root
}
