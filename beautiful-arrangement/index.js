const ntoa = (n) => {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

const isBeatiful = (val, index) => {
  return val % index === 0 || index % val === 0
}

const countArrangement = function(N) {
  const arr = ntoa(N)
  return dp(arr, {})
};

const dp = (arr, mem = {}) => {
  if (arr.length === 1) {
    return 1
  }

  if (mem[arr]) {
    return mem[arr]
  }

  let total = 0
  arr.forEach((a, i) => {
    if (isBeatiful(a, arr.length)) {
      total += dp([...arr.slice(0, i), ...arr.slice(i+1)], mem)
    }
  })
  mem[arr] = total
  return total
}

console.log(countArrangement(7))
