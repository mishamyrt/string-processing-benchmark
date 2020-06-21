module.exports = str => {
  const counts = {}
  let i = 0
  let symbol = ''
  let result = ''
  let key

  while (i < str.length) {
    symbol = str[i++]
    counts[symbol] = counts[symbol] ? counts[symbol] + 1 : 1
  }

  for (key in counts) {
    result += key + counts[key]
  }
  return result
}
