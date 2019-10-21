const getAnagrams = (arr) => {
  const record = {}
  for (const str of arr) {
    sortedStr = str.replace(' ', '').split('').sort().join()
    if (record[sortedStr] === undefined) {
      record[sortedStr] = [str]
    } else {
      record[sortedStr].push(str)
    }
  }
  const res = []
  for (const k of Object.keys(record)) {
    res.push(record[k])
  }
  return res
}

module.exports = getAnagrams
