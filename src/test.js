const { cases } = require('../test-data.js')
const { red, green, grey } = require('kleur')
const { getLongestName } = require('./core')
const { padColumn } = require('./strings')

const mapTest = fn => cases.map(([val, exp]) => fn(val) === exp)

function runTest (impls, exit = true) {
  const padName = padColumn(getLongestName(impls).length)
  process.stdout.write(grey('Unit test results:\n'))
  const passed = impls
    .map(([name, fn]) => [mapTest(fn), name])
    .map(([val, name]) => ([val.every(i => i), name]))
    .map(([passed, name]) => {
      process.stdout.write(`${padName(name)}${
        passed ? green('passed') : red('failed')
      }\n`)
      return passed
    })
    .filter(passed => !passed)
    .length === 0
  if (exit) {
    process.exit(parseInt(!passed))
  }
  return passed
}

module.exports = { runTest }
