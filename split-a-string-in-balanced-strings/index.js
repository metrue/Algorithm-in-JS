const balancedStringSplit = (s) => {
  const chars = s.split('')
  let Ls = 0
  let Rs = 0
  let num = 0
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'R') {
      Rs++
    }
    if (chars[i] === 'L') {
      Ls++
    }

    if (Rs === Ls) {
      num++
    }
  }
  return num
};

module.exports = balancedStringSplit
