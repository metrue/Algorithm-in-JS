const Node = require('../common/tree/binary_tree/node')

const levelOrder = (root) => {
  const res = []
  bfs(root, 0, res)
  return res
}

const bfs = (root, height, res) => {
  if (root === null) {
    return
  }

  if (height === res.length) {
    res.push([])
  }

  res[height].push(root.val)
  bfs(root.left, height + 1, res)
  bfs(root.right, height + 1, res)
}

module.exports = levelOrder
