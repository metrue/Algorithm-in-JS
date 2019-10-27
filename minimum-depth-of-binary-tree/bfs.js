const Queue = require('../common/queue/queue')

const minDepth = function(root) {
  if (!root) {
    return 0
  }
  const q = new Queue()
  q.enqueue(root)

  let height = 1
  while (q.size() > 0) {
    const toEnqueue = []
    const k = q.size()
    for (let i = 0; i < k; i++) {
      cur = q.dequeue()
      if (cur.left === null && cur.right === null) {
        return height
      }
      if (cur.left) {
        q.enqueue(cur.left)
      }
      if (cur.right) {
        q.enqueue(cur.right)
      }
    }
    height++
  }
}

module.exports = minDepth
