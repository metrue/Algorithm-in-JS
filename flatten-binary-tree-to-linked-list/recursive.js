const flatten = (root) => {
  if (!root) {
    return
  }
  flatten(root.left)
  flatten(root.right)

  const tmp = root.right
  root.right = root.left
  root.left = null
  while (root.right) {
    root = root.right
  }
  root.right = tmp
}
