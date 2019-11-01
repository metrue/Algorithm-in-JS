const defaultCompareFn = (a, b) => {
  if (a > b) {
    return 1
  } else  if (a < b) {
    return -1
  }
  return 0
}

const binarySearch = (list, target, compareFn = defaultCompareFn) => {
  let start = 0
  let end = list.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const compare = compareFn(list[mid], target)
    if (compare === 1) {
      end = mid
    } else if (compare === -1) {
      start = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

module.exports = binarySearch
