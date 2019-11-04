const ListNode = require('../common/linked_list/node')
const { printList } = require('../common/linked_list/helper')

const oddEvenList = (head) => {
  const oHead = new ListNode()
  const eHead = new ListNode()

  let oPos = oHead
  let ePos = eHead
  let p = head
  let i = 1
  while (p) {
    if (i % 2 !== 0) {
      oPos.next = new p
      oPos = oPos.next
    } else {
      ePos.next = p
      ePos = ePos.next
    }
    p = p.next
    i++
  }
  oPos.next = eHead.next
  ePos.next = null

  return oHead.next
}

const n0 = new ListNode(1)
const n1 = new ListNode(2)
const n2 = new ListNode(3)
const n3 = new ListNode(4)
const n4 = new ListNode(5)

n0.next = n1
n1.next = n2
n2.next = n3
n3.next = n4

const r = oddEvenList(n0)
// console.log(r)
printList(r)
