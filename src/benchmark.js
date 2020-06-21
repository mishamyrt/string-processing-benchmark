const { Suite } = require('benchmark')
const { padColumn } = require('./strings')
const { getLongestName } = require('./core')
const { yellow } = require('kleur')
const { cases } = require('../test-data.js')

const formatNumber = data =>
  String(data.toFixed(3))
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    .padStart(12)

function runBenchmark (impls) {
  const padName = padColumn(getLongestName(impls).length)
  const onCycle = ({ target }) => {
    const { hz, name } = target
    process.stdout.write(
      `${padName(name)}${yellow(formatNumber(hz))} ops/sec\n`
    )
  }

  const suite = new Suite()
  impls
    .map(([name, fn]) => [name, () => fn(cases[0][0])])
    .forEach(i => suite.add(...i))
  suite
    .on('cycle', onCycle)
    .run()
}

module.exports = { runBenchmark }
