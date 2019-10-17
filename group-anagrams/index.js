function hasSameChars(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }

  const sortedS1 = s1.split('').sort()
  const sortedS2 = s2.split('').sort()
  for (let i = 0; i < sortedS1.length; i++) {
    if (sortedS1[i] !== sortedS2[i]) {
      return false
    }
  }
  return true
}

function isSatified(list, str) {
  for (const s of list) {
    if (hasSameChars(s, str)) {
      return true
    }
  }
  return false
}

const bruteForce = function(strs) {
  const results = []
  for (const str of strs) {
    let hasGroup = false
    for (const res of results) {
      if (isSatified(res, str)) {
        res.push(str)
        hasGroup = true
        break
      }
    }
    if (!hasGroup) {
      results.push([str])
    }
  }
  return results
}

const useHash = (strs) => {
  const results = []
  const flag = {}
  for (const str of strs) {
    const s = str.split('').sort().join('')
    if (flag[s] !== undefined) {
      flag[s].push(str)
    } else {
      flag[s] = [str]
    }
  }

  Object.values(flag).forEach(v => results.push(v))
  return results
}

const usePrime = (strs) => {
  const results = []
  const flag = {}
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  for (const str of strs) {
    let sum = 1
    for (let i = 0; i < str.length; i++) {
      const num = str.charCodeAt(i) - 'a'.charCodeAt(0)
      sum *= primes[num]
    }
    if (flag[sum] !== undefined) {
      flag[sum].push(str)
    } else {
      flag[sum] = [str]
    }
  }
  Object.values(flag).forEach(v => results.push(v))
  return results
}

module.exports = {
  bruteForce,
  useHash,
  usePrime,
}
