const freqAlphabets = (s) => {
  const res = []
  const chs = s.split('')
  for (let i = 0; i < chs.length; i++) {
    if (chs[i] != '#') {
      res.push(String.fromCharCode(parseInt(chs[i], 10) + 96))
    } else {
      res.pop()
      res.pop()
      const tmp = chs[i - 2] + chs[i - 1]
      res.push(String.fromCharCode(parseInt(tmp, 10) + 96))
    }
  }
  return res
}

let res = freqAlphabets('1326#')
console.log(res)

 res = freqAlphabets('10#11#12')
console.log(res)
