const test = require('ava')
const { equals } = require('ramda')
const parseRecipients = require('./parse-recipients')

const target = {
  recipients: [
    { list: 'boris362@yandex.ru ' },
    { list: 'b.chumichev@corp.mail.ru\nborisboha@gmail.com' }
  ]
}

test('formats recipient list as array of strings', t => {
  t.true(equals(
    parseRecipients(target).recipients,
    [ 'boris362@yandex.ru', 'b.chumichev@corp.mail.ru', 'borisboha@gmail.com' ]
  ))
})