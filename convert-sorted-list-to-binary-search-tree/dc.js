const Node = require('../common/tree/binary_tree/node')
const ListNode = require('../common/linked_list/node')

const sortedListToBST = (head) => {
  if (!head) {
    return null
  }

  const { left, mid, right } = partition(head)
  const root = new Node(mid.val)

  if (left) {
    root.left = sortedListToBST(left)
  }
  if (right) {
    root.right = sortedListToBST(right)
  }

  return root
}

const partition = (head) => {
  let p = head
  let q = head

  if (!p.next) {
    return { left: null, mid: p, right: null }
  }

  while (p && p.next) {
    p = p.next.next
    q = q.next
  }

  let lRoot = head
  let l = lRoot
  while(l && l.next !== q) {
    l = l.next
  }

  const rRoot = q.next
  if (l) {
    l.next = null
  }

  return { left: lRoot, mid: q, right: rRoot }
}
//
// const n0 = new ListNode(-10)
// const n1 = new ListNode(-3)
// const n2 = new ListNode(0)
// const n3 = new ListNode(5)
// const n4 = new ListNode(9)
// n0.next = n1
// n1.next = n2
// n2.next = n3
// n3.next = n4
//
// console.log(sortedListToBST(n0))
//
// // const res = partition(n0)
// // console.log(res)
// // printList(res.left)
// // printList(res.right)
//
