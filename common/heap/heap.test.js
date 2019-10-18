const Heap = require('./heap')

describe('heap', () => {
  test.skip('min heap', () => {
    const fn = (a, b) => {
      return a < b
    }

    const h = new Heap(fn)
    const arr = [1, 0, 3, 5, 4]
    for (const val of arr) {
      h.push(val)
    }
    expect(h.all()).toEqual([0, 1, 3, 5, 4])


    const sorted = []
    while (!h.empty()) {
      const val = h.pop()
      sorted.push(val)
    }
    expect(sorted).toEqual([0, 1, 3, 4, 5])
  })

  test('max heap', () => {
    const fn = (a, b) => {
      return a > b
    }

    const h = new Heap(fn)
    const arr = [1, 0, 3, 5, 4]
    for (const val of arr) {
      h.push(val)
    }
    expect(h.all()).toEqual([5, 4, 1, 0, 3])

    const sorted = []
    while (!h.empty()) {
      const val = h.pop()
      sorted.push(val)
    }
    expect(sorted).toEqual([0, 1, 3, 4, 5].reverse())
  })
})
