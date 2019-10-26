const Stack = require('../common/stack/stack')

const postorderTraversal = (root) => {
  const res = []
  postorder(root, res)
  return res
};

const postorder = (root, res) => {
  if (!root) {
    return
  }

  const stack = new Stack()
  let p = root
  stack.push(p)
  while (!stack.empty()) {
    const p = stack.pop()
    res.unshift(p.val)
    if (p.left) {
      stack.push(p.left)
    }
    if (p.right) {
      stack.push(p.right)
    }
  }
}

module.exports = postorderTraversal
