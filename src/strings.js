const padColumn = maxLenght =>
  str => {
    const padding = maxLenght + 5
    return str.padEnd(padding < 15 ? 15 : padding)
  }

const longest = arr =>
  arr.reduce((a, b) => a.length > b.length ? a : b)

module.exports = {
  padColumn,
  longest
}
