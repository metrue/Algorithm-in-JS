const printVertically = (s) => {
  const words = s.split(/\s+/)
  const res = []
  for (let i = 0; ; i++) {
    if (words.every(w => w[i] === undefined)) {
      break
    }
    for (let j = 0; j < words.length; j++) {
      if (!res[i]) {
        res[i] = ''
      }
      res[i] += (words[j][i] === undefined ? ' ' : words[j][i])
    }
  }
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].replace(/\s+$/g, '')
  }
  return res
}
