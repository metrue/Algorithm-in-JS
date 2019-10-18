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

module.exports = Queue
