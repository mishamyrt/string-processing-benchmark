const { watch } = require('fs')
const { green, bold } = require('kleur')
const { debounce } = require('./core')

const getTime = () => {
  const now = new Date(Date.now())
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

function runWatch (implsPath, action) {
  watch(implsPath, debounce(() => {
    console.clear()
    process.stdout.write(bold(green(
      `Changed at ${getTime()}\n\n`
    )))
    action()
  }))
}

module.exports = { runWatch }
