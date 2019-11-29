const Node = require('../common/tree/binary_tree/node')

const lowestCommonAncestor = (root, p, q) => {
  if (root.left) {
    if (isCA(root.left, p, q)) {
      return lowestCommonAncestor(root.left, p, q)
    }
  }

  if (root.right) {
    if (isCA(root.right, p, q)) {
      return lowestCommonAncestor(root.right, p, q)
    }
  }

  return root
}

const isCA = (root, p, q) => {
  const a = contains(root, p)
  const b = contains(root, q)
  return a && b
}

const contains = (root, p) => {
  if (!root) {
    return false
  }

  if (root.val === p.val) {
    return true
  }

  return contains(root.left, p) || contains(root.right, p)
}
