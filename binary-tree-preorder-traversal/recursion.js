const preorderTraversal = (root) => {
  const res = []
  preorder(root, res)
  return res
};

const preorder = (root, res) => {
  if (!root)  {
    return res
  }

  res.push(root.val)
  preorder(root.left, res)
  preorder(root.right, res)
}

module.exports = preorderTraversal
