const isMonotonic = (A) => {
  if (A.length <= 1) {
    return true
  }

  flag = A[A.length - 1] - A[0] >= 0 ? 1 : -1

  for (let i = 1; i < A.length; i++) {
    if ((A[i] - A[i-1]) * flag < 0) {
       return false
    }
  }
  return true
}
