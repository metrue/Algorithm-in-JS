class RandomizedSet {
  constructor() {
    this.set = {}
  }

  insert(val) {
    if (this.set[val] !== undefined) {
      return false
    }
    this.set[val] = val
    return true
  }

  remove(val) {
    if (this.set[val] === undefined) {
      return false
    }

    delete this.set[val]
    return true
  }

  getRandom() {
    const vals = Object.keys(this.set)
    const rand = Math.floor(Math.random() * vals.length)
    return vals[rand]
  }
}
