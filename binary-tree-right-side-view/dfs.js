const rightSideView = (root) => {
	if (!root) {
		return []
  }

  const res = []
	dfs(root, 0,res)
  return res
}

const dfs = (root, level, res) => {
	if (!root) {
		return
  }

  if (res.length === level) {
    res[level] = root.val
  }

  if (root.right) {
    dfs(root.right, level + 1,res)
  }

  if (root.left) {
    dfs(root.left, level + 1,res)
  }
}
