const Queue = require('../common/queue/queue')

const sequentialDigits = (low, high) => {
  const q = new Queue()
  for (let i = 1; i < 9; i++) {
    q.enqueue(i)
  }

  const res = []
  while (q.size() > 0) {
    const cur = q.dequeue()
    if (cur >= low && cur <= high) {
      res.push(cur)
    }

    const last = cur % 10
    if (last < 9) {
      next = last + 1
      q.enqueue(cur * 10 + next)
    }
  }
  return res
}

const res = sequentialDigits(1000, 13000)
console.log(res)

