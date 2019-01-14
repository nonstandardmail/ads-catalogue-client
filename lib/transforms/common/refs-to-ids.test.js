const test = require('ava')
const { equals } = require('ramda')
const refsToIds = require('./refs-to-ids')

const target = () => ({
  field: [ { _ref: '1' }, { _ref: '2' } ]
})

test('unnests array of ref objects to a list of ids (_ref values)', t => {
  t.true(equals(refsToIds('field', target()).field, [ '1', '2' ]))
})

test('is curried', t => {
  t.true(equals(refsToIds('field')(target()).field, [ '1', '2' ]))
})
