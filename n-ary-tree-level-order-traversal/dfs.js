const Queue = require('../common/queue/queue')

const levelOrder = (root) => {
  if (!root) {
    return []
  }
  const res = []
  dfs(root, 0, res)
  return res
};

const dfs = (root, height, res) => {
  if (!root) {
    return
  }

  if (height === res.length) {
    res.push([])
  }

  res[height].push(root.val)
  for (const c of root.children) {
    dfs(c, height + 1, res)
  }
}
