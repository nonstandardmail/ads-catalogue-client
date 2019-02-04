require('dotenv').config()
const test = require('ava')
const localize = require('./l18n')

const target = {
  title: { '_type': 'localeString', ru: 'Заголовок', en: 'Heading' },
  description: { '_type': 'localeText', ru: 'Описание' },
  someBooleanField: true
}

const arrayTarget = [ target ]


test('localize method unnests locale field contents', t => {
  const localizedTarget = localize('ru', target)
  t.true(localizedTarget.title === target.title.ru)
  t.true(localizedTarget.description === target.description.ru)
  t.true(localizedTarget.someBooleanField)
})

test('localize method provides default language field value if necessary', t => {
  const localizedTarget = localize('en', target)
  t.true(localizedTarget.description === target.description.ru)
})

test('handles lists of objects', t => {
  const localizedTarget = localize('ru', arrayTarget)
  t.true(localizedTarget[0].description === arrayTarget[0].description.ru)
})
