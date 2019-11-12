const hasOperator = (str) => {
  return str.includes('*')
      || str.includes('-')
      || str.includes('+')
}

const diffWaysToCompute = (input) => {
  if (!hasOperator(input)) {
    return [parseInt(input, 10)]
  }

  const res = []
  for (let i = 0; i < input.length; i++) {
    const op = input[i]
    if (op === '+' || op === '-' || op === '*') {
      // Divide
      const left = input.substr(0, i)
      const right = input.substr(i + 1)
      const leftRes = diffWaysToCompute(left)
      const rightRes = diffWaysToCompute(right)
      // Conque
      for (const r1 of leftRes) {
        for (const r2 of rightRes) {
          res.push(calculate(r1, r2, op))
        }
      }
    }
  }
  return res
};

const calculate = (m, n, op) => {
  if (op === '*') {
    return m*n
  }

  if (op === '-') {
    return m - n
  }

  if (op === '+') {
    return m+n
  }
  // never goes here
}

console.log(diffWaysToCompute('1-2'))
