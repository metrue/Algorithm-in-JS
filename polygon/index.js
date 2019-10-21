const getShape = (arr) => {
  const hasInvalidPolygon = arr.find(c => c <= 0)
  if (hasInvalidPolygon) {
    return 2
  }

  const a = arr[0]
  const b = arr[1]
  const c = arr[2]
  const d = arr[3]

  if (a === b && a === c && a === d) {
    return 0
  }

  if ((a === b && c === d) ||
      (a === c && b === d) ||
      (a === d && b === c)
    ) {
      return 1
    }

    return 2
}
module.exports = getShape
