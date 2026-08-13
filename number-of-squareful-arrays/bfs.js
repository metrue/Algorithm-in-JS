const Queue = require('../common/queue/queue')

var isCousins = function(root, x, y) {
  if (!root) {
    return false
  }
  const q = new Queue()
  q.enqueue(root)

  while (q.size() > 0) {
    const k = q.size()
    let parents = []
    for (let i = 0; i < k; i++) {
      const cur = q.dequeue()
      if (cur.left) {
        if (cur.left.val === x || cur.left.val === y) {
          parents.push(cur)
        }
        q.enqueue(cur.left)
      }

      if (cur.right) {
        if (cur.right.val === x || cur.right.val === y) {
          parents.push(cur)
        }
        q.enqueue(cur.right)
      }
    }
    if (parents.length === 2) {
      return parents[0].val != parents[1].val
    }
  }
  return false
};

module.exports = isCousins
