const minDepth = function(root) {
  if (!root) {
    return 0
  }
  const res = []
  dfs(root, 0, res)
  return res.reduce((acc, cur) => {
    return Math.min(acc, cur)
  }, res[0])
};

const dfs = (root, height, res) => {
  if (!root) {
    return
  }

  if (root.left === null && root.right === null) {
    res.push(height + 1)
  }

  dfs(root.left, height + 1, res)
  dfs(root.right, height + 1, res)
}

module.exports = minDepth
