const Node = require('../common/tree/binary_tree/node')

const flatten = (root) => {
  let p = root
  while (p != null) {
    if (p.left) {
      //Find current node's prenode that links to current node's right subtree
      const pre = p.left
      while(pre.right) {
        pre = pre.right
      }
		  pre.right = p.right
      //Use current node's left subtree to replace its right subtree(original right
      //subtree is already linked by current node's prenode
      p.right = p.left;
      p.left = null;
    }
    p = p.right;
  }
}


const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
// const n1 = new Node(0)
// const n1 = new Node(0)
n1.left = n2
n1.right = n3
n2.left = n4
flatten(n1)
console.log(n1)
