const search = require('./search')

describe('search', () => {
  test.skip('empty input', () => {
    const list = []
    expect(search(list, 5)).toBe(-1)
  })

  test.skip('found when intput list with odd length', () => {
    const list = [3, 4, 0, 1, 2,]

    expect(search(list, 0)).toBe(2)
    expect(search(list, 1)).toBe(3)
    expect(search(list, 2)).toBe(4)
    expect(search(list, 3)).toBe(0)
    expect(search(list, 4)).toBe(1)
  })

  test.skip('found when intput list with even length', () => {
    const list = [2, 3, 4, 5, 0, 1]

    expect(search(list, 0)).toBe(4)
    expect(search(list, 1)).toBe(5)
    expect(search(list, 2)).toBe(0)
    expect(search(list, 3)).toBe(1)
    expect(search(list, 4)).toBe(2)
    expect(search(list, 5)).toBe(3)
  })

  test('notfound', () => {
    // let list = [0, 1, 2, 3, 4]
    // expect(search(list, 5)).toBe(-1)
    list = [4,5,6,7,0,1,2]
    expect(search(list, 3)).toBe(-1)
  })
})
