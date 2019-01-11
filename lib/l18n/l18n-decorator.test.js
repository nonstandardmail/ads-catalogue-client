require('dotenv').config()
const { merge } = require('ramda')
const test = require('ava')
const l18n = require('./l18n-decorator')

const target = {
  title: { '_type': 'localeString', ru: 'Заголовок', en: 'Heading' },
  description: { '_type': 'localeText', ru: 'Описание' },
  someBooleanField: true
}

const arrayTarget = [ target ]

test('decorator adds localize method to target object', t => {
  const enhansedTarget = l18n(target)
  t.truthy(enhansedTarget.localize)
  t.truthy(enhansedTarget.title)
})

test('localize method unnests locale field contents', t => {
  const enhansedTarget = l18n(target)
  const localizedTarget = enhansedTarget.localize('ru')
  t.true(localizedTarget.title === target.title.ru)
  t.true(localizedTarget.description === target.description.ru)
  t.true(localizedTarget.someBooleanField)
})

test('localize method provides default language field value if necessary', t => {
  const enhansedTarget = l18n(target)
  const localizedTarget = enhansedTarget.localize('en')
  t.true(localizedTarget.description === target.description.ru)
})

test('handles lists of objects', t => {
  const enhansedTarget = l18n(arrayTarget)
  const localizedTarget = enhansedTarget.localize('ru')
  t.true(localizedTarget[0].description === arrayTarget[0].description.ru)
})