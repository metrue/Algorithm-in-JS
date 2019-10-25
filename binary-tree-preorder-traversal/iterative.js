const Stack = require('../common/stack/stack')

const preorderTraversal = (root) => {
  const res = []
  preorder(root, res)
  return res
};

const preorder = (root, res) => {
  if (!root) {
    return
  }
  const stack = new Stack()
  let p = root
  stack.push(p)

  while (!stack.empty()) {
    p = stack.pop()
    res.push(p.val)
    if (p.right) {
      stack.push(p.right)
    }
    if (p.left) {
      stack.push(p.left)
    }
  }
}

module.exports = preorderTraversal
