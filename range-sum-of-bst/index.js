class Queue {
  constructor() {
    this.list = []
  }

  size() {
    return this.list.length
  }

  empty() {
    return this.size() === 0
  }

  enqueue(val) {
    this.list.push(val)
  }

  dequeue() {
    const tmp = this.list[0]
    this.list.shift()
    return tmp
  }

  peek() {
    return this.list[0]
  }
}

const rangeSumBST = (root, L, R) => {
  if (root === undefined) {
    return 0
  }

  const q = new Queue()
  q.enqueue(root)

  let sum = 0
  while (q.size() > 0) {
    cur = q.dequeue()
    if (cur.val <= R && cur.val >= L) {
      sum += cur.val
    }
    if (cur.left) {
      q.enqueue(cur.left)
    }
    if (cur.right) {
      q.enqueue(cur.right)
    }
  }

  return sum
}

const rangeSumBSTNext = (root, L, R) => {
  if (root === null) {
    return 0
  }

  if (root.val > R) {
    return rangeSumBSTNext(root.left, L, R)
  }

  if (root.val < L) {
    return rangeSumBSTNext(root.right, L, R)
  }

  return root.val + rangeSumBSTNext(root.left, L, R) + rangeSumBSTNext(root.right, L, R)
}

const travelThenCount = (root, L, R) => {
  const inorderTravel = (root, arr = []) => {
    if (root === null) {
      return
    }
    inorderTravel(root.left)
    arr.push(root.val)
    inorderTravel(root.right)
  }

  arr = []
  let sum = 0
  inorderTravel(root, arr)
  arr.forEach(c => {
    if (c >= L && c <= R) {
      sum += c
    }
  })
  return sum
}

module.exports = rangeSumBST
