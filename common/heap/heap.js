class Heap {
  constructor(compareFn) {
    this.list = []

    this.compareFn = compareFn
  }

  empty() {
    return this.list.length === 0
  }

  all() {
    return this.list
  }

  top() {
    return this.list[0]
  }

  push(val) {
    this.list.push(val)

    this.heapifyUp(this.list.length - 1)
  }

  pop() {
    if (this.list.length === 1) {
      return this.list.pop()
    }

    const tmp = this.list[0]
    this.list[0] = this.list.pop()
    this.heapifyDown(0)
    return tmp
  }

  getParent(childIndex) {
    const parentIndex = Math.floor((childIndex -1) / 2)
    if (parentIndex >= 0) {
      return this.list[parentIndex]
    }
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex -1) / 2)
  }

  hasParent(childIndex) {
    return Math.floor((childIndex -1) / 2) >= 0
  }

  hasLeftChild(parentIndex) {
    return parentIndex * 2 + 1 < this.list.length
  }

  hasRightChild(parentIndex) {
    return parentIndex * 2 + 2 < this.list.length
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2
  }

  swap(i, j) {
    const tmp = this.list[i]
    this.list[i] = this.list[j]
    this.list[j] = tmp
  }

  getLeftChild(parentIndex) {
    return this.list[parentIndex * 2 + 1]
  }

  getRightChild(parentIndex) {
    return this.list[parentIndex * 2 + 2]
  }

  heapifyDown(parentIndex) {
    let currentIndex = parentIndex
    while (this.hasLeftChild(currentIndex)) {
      let indexToSwap = this.getLeftChildIndex(currentIndex)
      if (this.hasRightChild(currentIndex)) {
        const rightChild = this.getRightChild(currentIndex)
        const leftChild = this.getLeftChild(currentIndex)
        if (this.compareFn(rightChild,leftChild)) {
          indexToSwap = this.getRightChildIndex(currentIndex)
        }
      }

      if (this.compareFn(this.list[indexToSwap], this.list[currentIndex])) {
        this.swap(indexToSwap, currentIndex)
        currentIndex = indexToSwap
      } else {
        break
      }
    }
  }

  heapifyUp(index) {
    let currentIndex = index
    while (this.hasParent(currentIndex)) {
      const parent = this.getParent(currentIndex)
      const current = this.list[currentIndex]
      if (this.compareFn(current, parent)) {
        const parentIndex = this.getParentIndex(currentIndex)
        this.swap(currentIndex, parentIndex)
        currentIndex = parentIndex
      } else {
        break
      }
    }
  }
}

module.exports = Heap
