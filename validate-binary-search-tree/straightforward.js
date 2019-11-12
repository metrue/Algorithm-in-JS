const isValidBST = (root) => {
  if (!root) {
    return true
  }
  const stack = new Stack()
  let p = root
  let pre = null
  while (true) {
    if (p !== null) {
      stack.push(p)
      p = p.left
    } else if (!stack.empty()) {
      p = stack.pop()
      if (pre !== null && p.val <= pre) {
        return false
      }
      pre = p.val
      p = p.right
    } else {
      break
    }
  }
  return true
}
