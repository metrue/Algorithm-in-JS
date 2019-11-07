const isValidBST = (root) => {
  const pre = {val: null}
  return dfs(root, pre)
}

const dfs = (node, pre) => {
  if (!node) {
    return true
  }

  if (!dfs(node.left, pre)) {
    return false
  }

  if (pre.val !== null && node.val <= pre.val) {
    return false
  }

  pre.val = node.val

  return dfs(node.right, pre)
}
