const { map, flatten, reject, isEmpty, trim } = require('ramda')

module.exports = target => {
  target.recipients = flatten(map(
    ({ list }) => reject(isEmpty, map(trim, list.split('\n'))),
    target.recipients
  ))
  return target
}