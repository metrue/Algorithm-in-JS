const deltaEncoding = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const escapeValue = -128
  const encoded = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1]
    if (diff < - 127 || diff > 127) {
      encoded.push(escapeValue)
    }
    encoded.push(diff)
  }
  return encoded
}

module.exports = deltaEncoding
