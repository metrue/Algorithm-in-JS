const dict = {
  '2': ['a', 'b','c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i' ],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
}
const letterCombinations = (input) => {
  if (input === "") {
    return []
  }
  const digits = input.split('')
  return combine(digits, digits.length - 1)
};

const combine = (digits, n) => {
  const arr = dict[digits[n]]
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
