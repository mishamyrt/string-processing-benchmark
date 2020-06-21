const { runTest } = require('./src/test')
const { runBenchmark } = require('./src/benchmark')
const { getImplementaions } = require('./src/core')

const implsPath = 'implementations'

const commands = {
  test: runTest,
  benchmark: runBenchmark
}

function main () {
  if (process.argv.length < 3) {
    console.error('Too few arguments')
    process.exit(1)
  }

  const handler = commands[process.argv[2]]
  if (!handler) {
    console.error('Unknown command')
    process.exit(1)
  }
  getImplementaions(implsPath)
    .then(handler)
}

main()
