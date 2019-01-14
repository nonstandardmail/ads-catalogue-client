const test = require('ava')
const devicesToEnum = require('./format-devices')

const target = {
  devices: [ { name: 'mobile' } ]
}

test('converts devices to array of strings', t => {
  t.true(devicesToEnum(target).devices[0] === 'mobile')
})
