const binarySearch = require('./binary_search')

describe('binarySearch', () => {
  test('empty input', () => {
    const list = []
    const target = 5
    expect(binarySearch(list, 5)).toBe(-1)
  })

  test('found when intput list with odd length', () => {
    const list = [0, 1, 2, 3, 4]
    const target = 2

    expect(binarySearch(list, 0)).toBe(0)
    expect(binarySearch(list, 1)).toBe(1)
    expect(binarySearch(list, 2)).toBe(2)
    expect(binarySearch(list, 3)).toBe(3)
    expect(binarySearch(list, 4)).toBe(4)
  })

  test('found when intput list with even length', () => {
    const list = [0, 1, 2, 3, 4, 5]
    const target = 2

    expect(binarySearch(list, 0)).toBe(0)
    expect(binarySearch(list, 1)).toBe(1)
    expect(binarySearch(list, 2)).toBe(2)
    expect(binarySearch(list, 3)).toBe(3)
    expect(binarySearch(list, 4)).toBe(4)
    expect(binarySearch(list, 5)).toBe(5)
  })

  test('notfound', () => {
    const list = [0, 1, 2, 3, 4]
    const target = 5
    expect(binarySearch(list, 5)).toBe(-1)
  })
})
