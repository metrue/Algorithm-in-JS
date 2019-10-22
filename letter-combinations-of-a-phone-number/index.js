const dict = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}
const letterCombinations = (input) => {
  if (input === "") {
    return []
  }
  const digits = input.split('')
  return combine(digits, digits.length - 1)
};

const combine = (digits, n) => {
  const arr = dict[digits[n]].split('')
  if (n === 0) {
    return arr
  }

  const res = combine(digits, n - 1)
  const ret = []
  for (const a of arr) {
    for (const b of res) {
      ret.push(b+a)
    }
  }
  return ret
}

module.exports = letterCombinations
