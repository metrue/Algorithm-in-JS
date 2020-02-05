const removePalindromeSub = (s) => {
  if (s.length === 0) {
    return 0
  }

  return s.split('').reverse().join('') === s ? 1 : 2
}

console.log(removePalindromeSub('aaaab'))
console.log(removePalindromeSub('aaa'))
