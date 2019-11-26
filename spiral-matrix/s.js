const swap = (a, b) => {
  const tmp = a.val
  a.val = b.val
  b.val = tmp
}

const spiralOrder = (matrix) => {
  if (matrix.length === 0) {
    return matrix
  }

  const res = matrix[0]

  const directions = [ [1, 0], [0, -1], [-1, 0], [0, 1] ]
  let currentDirection = 0

  let maxRow = { val: matrix.length }
  let maxCol = { val: matrix[0].length }

  // start from the top right corner
  let col = maxCol.val - 1
  let row = 0
  let left = (maxRow.val - 1) * maxCol.val
  while (left > 0) {
    for (let j = 1; j < maxRow.val; j++) {
      row += directions[currentDirection][0]
      col += directions[currentDirection][1]
      res.push(matrix[row][col]);

      left--
    }
    // decrease the size of row or column
    maxRow.val = maxRow.val - 1
    // switch between horizontal and vertical mode
    swap(maxRow, maxCol)
    // loop between direction offsets
    currentDirection = (currentDirection + 1) % 4
  }
  return res
}

const m = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
console.log(spiralOrder(m))
