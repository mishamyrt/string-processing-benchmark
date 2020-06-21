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
  longest(impls.map(v => v[1]))

module.exports = {
  getImplementaions,
  getLongestName
}
