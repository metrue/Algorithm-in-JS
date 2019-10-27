const levelOrderBottom = (root) => {
  const res = []
  dfs(root, 0, res)
  return res.reverse()
}

const dfs = (root, height, res) => {
  if (!root) {
    return
  }

  if (height === res.length) {
    res.unshift([])
  }

  dfs(root.left, height + 1, res)
  dfs(root.right, height + 1, res)
  res[res.length - height - 1].push(root.val)
}
