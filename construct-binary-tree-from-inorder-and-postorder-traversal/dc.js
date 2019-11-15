const Node = require('../common/tree/binary_tree/node')

var buildTree = (inorder, postorder) => {
  if (postorder.length === 0) {
    return null
  }
  const val = postorder[postorder.length - 1]
  const root = new Node(val)
  if (postorder.length === 1) {
    return root
  }

  const index = inorder.indexOf(val)
  const inorderLeft = inorder.slice(0, index)
  const inorderRight = inorder.slice(index + 1)
  const postorderLeft = postorder.slice(0, inorderLeft.length)
  const postorderRight = postorder.slice(inorderLeft.length, inorderLeft.length + inorderRight.length)

  root.left = buildTree(inorderLeft, postorderLeft)
  root.right = buildTree(inorderRight, postorderRight)

  return root
}

const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]
console.log(buildTree(inorder, postorder))
