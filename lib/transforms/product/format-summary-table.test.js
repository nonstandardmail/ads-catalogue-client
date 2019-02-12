const test = require('ava')
const formatSummaryTable = require('./format-summary-table')

const target =
  { summaryTable:
    { '_type': 'localeTable',
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
  }

const formattedTarget = formatSummaryTable(target)

test('unnests rows field', t => {
  t.true(formattedTarget.summaryTable.en.length === 2)
  t.true(formattedTarget.summaryTable.ru.length === 3)
})

test('adds price warning tooltip', t => {
  t.true(typeof formattedTarget.summaryTable.en[1].tooltip === 'string')
  t.true(typeof formattedTarget.summaryTable.ru[1].tooltip === 'string')
  t.true(typeof formattedTarget.summaryTable.ru[2].tooltip === 'string')
})
