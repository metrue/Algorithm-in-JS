const Stack = require('../common/stack/stack')

const iterative = (root) => {
  const res = []
  inorder(root, res)
  return res
}

const inorder = (root, res) => {
  if (!root) {
    return
  }
  const stack = new Stack()
  let p = root
  while (true) {
    if (p !== null) {
      stack.push(p)
      p = p.left
    } else if (!stack.empty()) {
      p = stack.pop()
      res.push(p.val)
      p  = p.right
    } else {
      break
    }
  }
}

module.exports = iterative
