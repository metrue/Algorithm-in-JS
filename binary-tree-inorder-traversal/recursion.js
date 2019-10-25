const recursion = (root) => {
  const res = []
  inorder(root, res)
  return res
}

const inorder = (root, res) => {
  if (!root) {
    return
  }

  inorder(root.left, res)
  res.push(root.val)
  inorder(root.right, res)
}
module.exports = recursion
