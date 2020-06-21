module.exports = str => {
  var counts = {}
  var result = ''

  for (var symbol of str) {
    counts[symbol] = counts[symbol] ? counts[symbol] + 1 : 1
  }

  for (var key in counts) {
    result += key + counts[key]
  }
  return result
}
