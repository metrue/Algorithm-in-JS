const Stack = require('../common/stack/stack')

const hasOperator = (str) => {
  return str.includes('-') || str.includes('+')
}

const isOperator = (c) => {
  return c === '-' || c === '+'
}

const calculate = (input) => {
  const s = input.replace(/\s+/, '')
  if (!hasOperator(s)) {
    return parseInt(s.replace(/\(|\)/, ''), 10)
  }

  const stack = new Stack()
  let cur = ''
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '+' || c === '-' || c === '(') {
      if (cur !== '') {
        stack.push(parseInt(cur, 10))
        cur = ''
      }
      stack.push(c)
    } else if (c === ')') {
      if (cur !== '') {
        stack.push(parseInt(cur, 10))
        cur = ''
      }

      const opStack = new Stack()
      const valStack = new Stack()
      while (true && stack.size() > 0) {
        const str = stack.pop()
        console.log("got ", str)
        if (str !== '(') {
          if (isOperator(str)) {
            opStack.push(str)
          } else {
            valStack.push(str)
          }
        } else {
          break
        }
      }
      const curRes = calculateExpressionStack(opStack, valStack)
      console.log('++++', curRes)
      stack.push(curRes)
      // pop and calculate
    } else {
      cur += c
    }
  }
  if (cur !== '') {
    stack.push(parseInt(cur, 10))
    cur = ''
  }

console.log('++++')
  const opStack = new Stack()
  const valStack = new Stack()
console.log(stack.list)
  while (stack.size() > 0) {
    const str = stack.pop()
    if (isOperator(str)) {
      opStack.push(str)
    } else {
      valStack.push(str)
    }
  }
// console.log(valStack.list)
// console.log(opStack.list)
  return calculateExpressionStack(opStack, valStack)
};

const calculateExpressionStack = (opStack, valStack) => {
  let res = valStack.pop()
  while (opStaiva.size() > 0) {
    const op = opStack.pop()
    const cur = valStack.pop()
    res = calculateExpression(res, cur, op)
  }
  return res
}

const calculateExpression = (m, n, op) => {
  console.log(m, n, op)
  if (op === '-') {
    return m - n
  }

  if (op === '+') {
    return m+n
  }
  // never goes here
}

// console.log(calculate('1+1'))
// console.log(calculate('(1+1)'))
// console.log(calculate('(1+1 + 10)'))
// console.log(calculate('(1 - 1 + 10)'))
// console.log(calculate(' 2 - 1 + 2'))
// console.log(calculate('(2 - 1 + 2)'))
console.log(calculate('(1)'))
