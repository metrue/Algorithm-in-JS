const Queue = require('../common/queue/queue')
const Node = require('../common/tree/binary_tree/node')

const removeLeafNodes = (root, target) => {
  if (!root) {
    return
  }
  const dummy = { left: root }
  dfs(dummy, target, [])
  return dummy.left
}

const dfs = (root, target, path) => {
  if (!root.left && !root.right && root.val === target) {
    let cur = root
    while (path.length > 0) {
      const parent = path[path.length - 1]
      if (parent.left === cur) {
        parent.left = null
      }
      if (parent.right === cur) {
        parent.right = null
      }
      if ((parent.val !== target)
        || (parent.left !== null)
        || (parent.right !== null)) {
        break
      } else {
        cur = path.pop()
      }
    }
    return
  }

  if (root.left) {
    dfs(root.left, target, [...path, root])
  }

  if (root.right) {
    dfs(root.right, target, [...path, root])
  }
}

// const n1 = new Node(1)
// const n2 = new Node(2)
// const n3 = new Node(3)
// const n4 = new Node(2)
// const n5 = new Node(2)
// const n6 = new Node(4)
//
// n1.left = n2
// n1.right = n3
// n1.left = n2
// n2.left = n4
// n3.right = n6
// n3.left = n5

// const n1 = new Node(1)
// const n2 = new Node(3)
// const n3 = new Node(3)
// const n4 = new Node(3)
// const n5 = new Node(2)

const n1 = new Node(1)
const n2 = new Node(1)
const n3 = new Node(1)
n1.left = n2
n1.right = n3

const a = removeLeafNodes(n1, 1)
console.log(a)

