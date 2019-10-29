const Queue = require('../common/queue/queue')

const zigzagLevelOrder = (root) => {
  if (!root) {
    return []
  }
  const q = new Queue()
  q.enqueue(root)

  const res = []
  let level = 0
  while (q.size() > 0) {
    const k = q.size()
    const nodes = []
    for (let i = 0; i < k; i++) {
      const cur = q.dequeue()
      if (level % 2 === 0) {
        nodes.push(cur.val)
      } else {
        nodes.unshift(cur.val)
      }
      if (cur.left) {
        q.enqueu(cur.left)
      }

      if (cur.right) {
        q.enqueu(cur.right)
      }
    }
    res.push(nodes)
    level++
  }
  return res
}
