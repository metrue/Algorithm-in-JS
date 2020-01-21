const maximum69Number  = (num) => {
  const digits = []
  while (num > 0) {
    digits.unshift(num % 10)
    num = Math.floor(num / 10)
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 6) {
      digits[i] = 9
      break
    }
  }

  return parseInt(digits.join(''), 10)
}
