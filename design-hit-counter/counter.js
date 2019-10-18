const Queue = require('../common/queue/queue')

class Counter {
  constructor() {
    this.hitQueue = new Queue()
  }

  hit(timestamp) {
    this.hitQueue.enqueue(timestamp)
  }

  getHits(timestamp) {
    const startTime = timestamp - 300
    while (this.hitQueue.size() > 0) {
      const val = this.hitQueue.peek()
      if (val > startTime) {
        return this.hitQueue.size()
      } else {
        this.hitQueue.dequeue()
      }
    }

    return 0
  }
}

class BetterCounter {
  constructor() {
    this.hits = []
    this.timestamps = []
  }

  hit(timestamp) {
    const index = timestamp % 300
    if (this.timestamps[index] !== timestamp) {
      this.timestamps[index] = timestamp
      this.hits[index] = 1
    } else {
      this.hists[index]++
    }
  }

  getHits(timestamp) {
    let hits = 0
    for (let i = 0; i < 300; i++) {
      if (timestamp - this.timestamps[i] < 300) {
        hits += this.hits[i]
      }
    }
    return hits
  }
}

module.exports = {
  Counter,
  BetterCounter,
}
