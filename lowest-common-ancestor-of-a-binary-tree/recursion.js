const lowestCommonAncestor = (root, p, q) => {
  const res = { root: null }
  dfs(root, p, q, res)
  return res.root
};

const has = (root, node) => {
  if (!root) {
    return false
  }
  if (root.val === node.val) {
    return true
  }
  if (has(root.left, node)) {
    return true
  }
  return has(root.right, node)
}

const dfs = (root, p, q, res) => {
  if (!root) {
    return
  }

  if (!has(root, p) || !has(root, q)) {
    return
  }

  res.root = root
  dfs(root.left, p, q, res)
  dfs(root.right, p, q, res)
}

const smart = (root, p, q) => {
  if (!root || p.val === root.val || q.val === root.val) {
    return root
  }
  const left = smart(root.left, p, q)
  const right = smart(root.right, p, q)
  if (left && right) {
    return root
  }
  return left ? left : right
}

module.exports = {
  has,
  lowestCommonAncestor,
  smart,
}
