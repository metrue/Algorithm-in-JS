const isValidBST = (root) => {
  return check(root, -Infinity, Infinity)
}

const check = (node, min, max) => {
  if (!node) {
    return true
  }

  if (node.val <= min || node.val >= max) {
    return false
  }
  return check(node.left, min, node.val) && check(node.right, node.val, max)
}
