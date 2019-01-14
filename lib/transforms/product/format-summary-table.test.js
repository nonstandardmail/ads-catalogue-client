const test = require('ava')
const formatSummaryTable = require('./format-summary-table')

const target = {
  '_type': 'localeTable',
  'en': {
    'rows': [
      { 'cells': [ 'Field', 'Value' ] },
      { 'cells': [ 'Cost', 'Value' ] }
    ]
  },
  'ru': {
    'rows': [
      { 'cells': [ 'Параметр 1', 'Значение 1' ] },
      { 'cells': [ 'Стоимость', 'Значение 2' ] },
      { 'cells': [ 'Цена', 'Значение 3' ] }
    ]
  }
}

const formattedTarget = formatSummaryTable(target)

test('unnests rows field', t => {
  t.true(formattedTarget.en.length === 2)
  t.true(formattedTarget.ru.length === 3)
})

test('adds price warning tooltip', t => {
  t.true(typeof formattedTarget.en[1].tooltip === 'string')
  t.true(typeof formattedTarget.ru[1].tooltip === 'string')
  t.true(typeof formattedTarget.ru[2].tooltip === 'string')
})
