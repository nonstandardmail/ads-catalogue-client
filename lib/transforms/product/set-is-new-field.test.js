const test = require('ava')
const setIsNewField = require('./set-is-new-field')

const newTarget = {
  newUntilDate: '3000-01-18'
}

const oldTarget = {
  newUntilDate: '2018-01-18'
}

const emptyTarget = {
  newUntilDate: '2018-01-18'
}

test('resolves if product is new and sets isNew field', t => {
  t.true(setIsNewField(newTarget).isNew)
  t.true(!setIsNewField(oldTarget).isNew)
  t.true(!setIsNewField(emptyTarget).isNew)
})
