const maxPathSum = (root) => {
  const res = { max: -Infinity }
  getMaxSum(root, res)
  return res.max
}


const getMaxSum = (root, res) => {
  if (!root) {
    return 0
  }

  const left = Math.max(0, getMaxSum(root.left, res))
  const right = Math.max(0, getMaxSum(root.right, res))
  res.max = Math.max(res.max, left + right + root.val)

  return root.val + Math.max(left, right)
}
