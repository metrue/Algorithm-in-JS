const Queue = reuquire('../common/queue/queue')

const connect = function(root) {
  if (!root) {
    return root
  }
  const q = new Queue()
  q.enqueue(root)
  while (q.size() > 0) {
    const k = q.size()
    let pre = q.dequeue()
    if (pre.left) {
      q.enqueue(pre.left)
    }
    if (pre.right) {
      q.enqueue(pre.right)
    }
    for (let i = 1; i < k; i++) {
      const cur = q.dequeue()
      if (cur.left) {
        q.enqueue(cur.left)
      }
      if (cur.right) {
        q.enqueue(cur.right)
      }
      pre.next = cur
      pre = cur
    }
  }
  return root
}
