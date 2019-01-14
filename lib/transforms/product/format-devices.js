const { prop, map } = require('ramda')

module.exports = target => {
  target.devices = map(prop('name'), target.devices)
  return target
}
