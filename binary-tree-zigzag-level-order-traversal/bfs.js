const zigzagLevelOrder = (root) => {
  const res = []
  bfs(root, 0, res)
  return res
}

const bfs = (root, level, res = []) => {
  if (!root) {
    return
  }

  if (level === res.length) {
    res[level] = []
  }

  if (level % 2 === 0) {
    res[level].push(root.val)
  } else {
    res[level].unshift(root.val)
  }

  if (root.left) {
    bfs(root.left, level + 1, res)
  }

  if (root.right) {
    bfs(root.right, level + 1, res)
  }
}
