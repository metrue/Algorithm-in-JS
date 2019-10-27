const Queue = require('../common/queue/queue')

const levelOrder = (root) => {
  if (!root) {
    return []
  }
  const res = []
  const q = new Queue()
  q.enqueue(root)

  let height = 0
  while (q.size() > 0) {
    const k = q.size()
    for (let i = 0; i < k; i++) {
      if (res[height] === undefined) {
        res[height] = []
      }
      const cur = q.dequeue()
      res[height].push(cur.val)
      for (const c of cur.children) {
        q.enqueue(c)
      }
    }
    height++
  }
  return res
};
