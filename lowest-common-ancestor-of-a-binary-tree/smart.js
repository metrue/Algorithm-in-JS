const lowestCommonAncestor = (root, p, q) => {
  if (!root || root.val === q.val || root.val === p.val) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  }

  return left ? left : right
}
