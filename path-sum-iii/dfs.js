const Queue = require('../common/queue/queue')
const Node = require('../common/tree/binary_tree/node')

const pathSum = (root, sum) => {
  if (!root) {
    return 0
  }
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

const dfs = (root, sum) => {
  if (!root) {
    return 0
  }
  const left =  dfs(root.left, sum - root.val)
  const right = dfs(root.right, sum - root.val)
  return root.val === sum ? 1 + left + right : left + right
}
