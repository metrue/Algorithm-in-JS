const connect = (root) => {
  if (!root) {
    return
  }

  if(root.left) {
    root.left.next = root.right
  }
  if (root.right && root.next) {
    root.right.next = root.next.left
  }

  connect(root.left)
  connect(root.right)
}
