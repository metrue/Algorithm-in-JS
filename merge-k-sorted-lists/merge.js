const Heap = require('../common/heap/heap')
const Node = require('../common/linked_list/node')
const { printList } = require('../common/linked_list/helper')

const merge = (lists) => {
  const minHeap = new Heap((a, b) => {
    return a.val < b.val
  })

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      minHeap.push(lists[i])
    }
  }

  const root = new Node()
  let p = root
  while (minHeap.size() > 0) {
    const cur = minHeap.pop()
    p.next = cur
    p = p.next

    if (cur.next) {
      minHeap.push(cur.next)
    }
  }
  return root.next
}
