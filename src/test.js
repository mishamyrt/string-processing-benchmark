const { cases } = require('../test-data.js')
const { red, green } = require('kleur')
const { getLongestName } = require('./core')
const { padColumn } = require('./strings')

const mapTest = fn => cases.map(([val, exp]) => fn(val) === exp)

function runTest (impls) {
  const padName = padColumn(getLongestName(impls).length)
  impls
    .map(([name, fn]) => [mapTest(fn), name])
    .map(([val, name]) => ([val.every(i => i), name]))
    .map(([passed, name]) => {
      process.stdout.write(`${padName(name)}${
        passed ? green('passed') : red('failed')
      }\n`)
      return passed
    })
    .filter(passed => !!passed)
    .length > 0 ? process.exit(1) : process.exit(0)
}

module.exports = { runTest }
