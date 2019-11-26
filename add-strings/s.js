const leftPad = (str, len, symbol = '0') => {
  let s = str
  for (let i = 0; i < len - str.length; i++) {
    s = symbol + s
  }
  return s
}

const addStrings = (num1, num2) => {
  const len = Math.max(num1.length, num2.length)
  num1 = leftPad(num1, len, '0')
  num2 = leftPad(num2, len, '0')

  let res = ''
  let carry = 0
  for (let i = len - 1; i >= 0; i--) {
    const n1 = num1[i] - '0'
    const n2 = num2[i] - '0'
    let n = n1 + n2 + carry
    if (n > 9) {
      n = n - 10
      carry = 1
    } else {
      carry = 0
    }
    res = n + '' + res
  }
  return carry === 1 ? '1' + res : res
}
