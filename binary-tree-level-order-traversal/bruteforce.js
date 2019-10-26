const Queue = require('../common/queue/queue')
const Node = require('../common/tree/binary_tree/node')

const levelOrder = (root) => {
  if (!root) {
    return [[]]
  }
  const counts = []
  let p = root
  const q = new Queue()
  q.enqueue({ level: 0, node: root })
  while (q.size() > 0) {
    const n = q.dequeue()
    if (counts[n.level] === undefined) {
      counts[n.level] = []
    }
    counts[n.level].push(n.node.val)

    if (n.node.left) {
      q.enqueue({ level: n.level + 1, node: n.node.left })
    }
    if (n.node.right) {
      q.enqueue({ level: n.level + 1, node: n.node.right })
    }
  }
  return counts
}

module.exports = levelOrder
