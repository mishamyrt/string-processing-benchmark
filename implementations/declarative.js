module.exports = str =>
  Object.entries(
    str
      .split('')
      .reduce((acc, cur) => ({
        ...acc,
        [cur]: acc[cur] ? acc[cur] + 1 : 1
      }), {})
  ).reduce((acc, cur) => `${acc}${cur.join('')}`, '')
