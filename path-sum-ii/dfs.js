const pathSum = (root, sum) => {
  if (!root) {
    return []
  }

  const res = []
  dfs(root, sum, [], res)
  return res
}

const dfs = (node, sub, path, res) => {
  if (sub === node.val && !node.left && !node.right) {
    res.push([...path, node.val])
  }

  if (node.left){
    dfs(node.left, sub - node.val, [...path, node.val], res)
  }
  if (node.right) {
    dfs(node.right, sub - node.val, [...path, node.val], res)
  }
}
