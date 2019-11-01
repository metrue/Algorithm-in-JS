const searchMatrix = require('./search')

test('searchMatrix', () => {
  let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  expect(searchMatrix(matrix, 3)).toBe(true)
  expect(searchMatrix(matrix, 13)).toBe(false)

  matrix = [[1]]
  expect(searchMatrix(matrix, 1)).toBe(true)
})
