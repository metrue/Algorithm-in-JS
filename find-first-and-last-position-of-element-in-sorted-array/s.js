
const searchRange = function(nums, target) {
  const start =  searchIndex(nums, target, true)
  const end =  searchIndex(nums, target, false)
  return [start, end]
}

const  searchIndex = (nums, target, first = false) => {
  let result = -1
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      result = mid
      if (first) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return result
}
