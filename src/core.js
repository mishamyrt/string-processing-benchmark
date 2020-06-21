const { readdir } = require('fs').promises
const { parse, join } = require('path')
const { longest } = require('./strings')

const getImplementaions = async (dir) =>
  readdir(dir).then(
    files => files.map(file =>
      [parse(file).name, require(join(process.cwd(), dir, file))]
    )
  )

const getLongestName = impls =>
  longest(impls.map(v => v[0]))

const debounce = (fn, timeout = 500) => {
  let allowed = true
  return (...args) => {
    if (!allowed) return
    allowed = false
    setTimeout(() => { allowed = true }, timeout)
    fn(...args)
  }
}

module.exports = {
  getImplementaions,
  getLongestName,
  debounce
}
