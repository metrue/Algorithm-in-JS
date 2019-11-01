const {
  has,
  lowestCommonAncestor,
  smart,
} = require('./recursion')
const Node = require('../common/tree/binary_tree/node')

test('lowestCommonAncestor', () => {
3,5,1,6,2,0,8,null,null,7,4
  n0 = new Node(3)
  n1 = new Node(5)
  n2 = new Node(1)
  n3 = new Node(6)
  n4 = new Node(2)
  n5 = new Node(0)
  n6 = new Node(8)
  n7 = new Node(7)
  n8 = new Node(4)

  n0.left = n1
  n0.right = n2
  n1.left = n3
  n1.right = n4
  n2.left = n5
  n2.right = n6
  n4.left = n7
  n4.right = n8

  // const y = has(n0, 4)
  // console.log('++++> ', y)
  // console.log('++++> ', has(n0, 8))

  let out = lowestCommonAncestor(n0, n3, n4)
  console.log('--->', out.val)
  out = lowestCommonAncestor(n0, n1, n2)
  console.log('--->', out.val)

  out = smart(n0, n3, n4)
  console.log('--->', out.val)
  out = smart(n0, n1, n2)
  console.log('--->', out.val)
})

