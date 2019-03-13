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

const newTarget =
  { summaryTable:
    { '_type': 'localeTable',
      'en': {
        'rows': [
          [ 'Площадка 1', 'Field', 'Value' ],
          [ 'Площадка 2', 'Cost', 'Value' ]
        ]
      },
      'ru': {
        'rows': [
          [ 'Площадка 1', 'Параметр 1', 'Значение 1' ],
          [ 'Площадка 2', 'Стоимость', 'Значение 2' ],
          [ 'Площадка 2', 'Цена', 'Значение 3' ]
        ]
      }
    }
  }

const formattedTarget = formatSummaryTable(newTarget)

test('unnests rows field', t => {
  t.true(formattedTarget.summaryTable.en['Площадка 1'].length === 1)
  t.true(formattedTarget.summaryTable.ru['Площадка 2'].length === 2)
})

test('adds price warning tooltip', t => {
  t.true(typeof formattedTarget.summaryTable.en['Площадка 2'][0].tooltip === 'string')
  t.true(typeof formattedTarget.summaryTable.ru['Площадка 2'][0].tooltip === 'string')
  t.true(typeof formattedTarget.summaryTable.ru['Площадка 2'][1].tooltip === 'string')
})
