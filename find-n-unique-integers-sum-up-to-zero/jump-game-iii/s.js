const canReach = (arr, start) => {
  return solve(arr, start, {})
}

const solve = (arr, start, visited = {}) => {
  if (start < 0 || start >= arr.length) {
    return false
  }

  if (arr[start] === 0) {
    return true
  }

  visited[start] = true

  const forward = start + arr[start]
  const back = start - arr[start]
  if (!visited[forward] && solve(arr, forward, visited)) {
    return true
  }
  if (!visited[back] && solve(arr, back, visited)) {
    return true
  }
  return false
}
