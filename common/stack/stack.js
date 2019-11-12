class Stack {
  constructor() {
    this.list = []
  }

  push(val) {
    this.list.push(val)
  }

  pop() {
    return this.list.pop()
  }

  peek() {
    return this.list[this.list.length - 1]
  }

  top() {
    return this.list[this.list.length - 1]
  }

  size() {
    return this.list.length
  }

  empty() {
    return this.size() === 0
  }
}

module.exports = Stack
