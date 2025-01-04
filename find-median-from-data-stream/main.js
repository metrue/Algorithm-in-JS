class MedianFinder {
  constructor() {
    this.arr = [];
  }

  // O(n) time complexity
  addNum(num) {
    for (let i = 0; i < this.arr.length; i++) {
      if (num < this.arr[i]) {
        this.arr.splice(i, 0, num);
        return;
      }
    }
    this.arr.push(num);
  }

  // O(1) time complexity
  findMedian() {
    const mid = Math.floor(this.arr.length / 2);
    if (this.arr.length % 2 === 0) {
      return (this.arr[mid - 1] + this.arr[mid]) / 2;
    }
    return this.arr[mid];
  }
}

class MedianFinderRange {
  constructor() {
    // the range is 100
    this.arr = Array(100).fill(0);
  }

  // O(1) time complexity
  addNum(num) {
    this.arr[num]++;
  }

  // O(n) time complexity
  findMedian() {
    const numbers = this.arr.reduce((acc, val, i) => {
      for (let j = 0; j < val; j++) {
        acc.push(i);
      }
      return acc;
    }, []);

    const mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      return (numbers[mid - 1] + numbers[mid]) / 2;
    }
    return numbers[mid];
  }
}

class MedianFinderMostInRange {
  constructor() {
    // 99% of of the number are in [0, 100], but 1% are possible to be outside
    // of this range
    this.arr = Array(101).fill(0);
    this.outside = {};
  }

  // O(1) time complexity
  addNum(num) {
    if (num < 0 || num > 100) {
      this.outside[num] = this.outside[num] ? this.outside[num] + 1 : 1;
      return;
    }
    this.arr[num]++;
  }

  // O(n + klogk) time complexity
  findMedian() {
    // merge the arr and outside into sorted list
    // O(n) time complexity
    let numbers = this.arr.reduce((acc, val, i) => {
      for (let j = 0; j < val; j++) {
        acc.push(i);
      }
      return acc;
    }, []);

    // say the size of outside is k
    // so the following sorting time complexity is O(klogk)
    const outsideNumbers = Object.keys(this.outside)
      .map((a) => parseInt(a, 10))
      .sort((a, b) => a - b);

    // O(k) time complexity
    const left = [];
    const right = [];
    for (const n of outsideNumbers) {
      if (n < 0) {
        left.push(n);
      }
      if (n > 100) {
        right.push(n);
      }
    }
    // O(k) time complexity
    numbers = left.concat(numbers).concat(right);

    const mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      return (numbers[mid - 1] + numbers[mid]) / 2;
    }
    return numbers[mid];
  }
}

module.exports = {
  MedianFinder,
  MedianFinderRange,
  MedianFinderMostInRange,
};
