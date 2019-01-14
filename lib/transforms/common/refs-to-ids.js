const { curryN, map, prop } = require('ramda')

module.exports = curryN(2, (fieldName, target) => {
  target[fieldName] = map(prop('_ref'), target[fieldName])
  return target
})