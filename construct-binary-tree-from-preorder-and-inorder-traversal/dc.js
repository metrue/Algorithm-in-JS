const Node = require('../common/tree/binary_tree/node')

const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
    return null
  }

  const val = preorder[0]
  const root = new Node(val)
  if (preorder.length === 1) {
    return root
  }

  const index = inorder.indexOf(val)

  const inorderLeft = inorder.slice(0, index)
  const inorderRight = inorder.slice(index + 1)
  const preorderLeft = preorder.slice(1, 1 + inorderLeft.length)
  const preorderRight = preorder.slice(inorderLeft.length + 1)

  root.left = buildTree(preorderLeft, inorderLeft)
  root.right = buildTree(preorderRight, inorderRight)

  return root
}

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]
console.log(preorder, inorder)
console.log(buildTree(preorder, inorder))
