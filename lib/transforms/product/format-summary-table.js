const { pipe, map, groupBy } = require('ramda')

const langs = [ 'en', 'ru' ]
const warnings = {
  ru: 'Уточняйте действующие цены у наших менеджеров',
  en: 'Price may vary. Contact us to get a quote'
}

function wrapCells (target) {
  for (const lang of langs) {
    if (target[lang] && target[lang].rows)
      target[lang].rows = map(cells => ({ cells }), target[lang].rows)
  }
  return target
}

function unnestRows (target) {
  for (const lang of langs) {
    if (target[lang] && target[lang].rows)
      target[lang] = target[lang].rows
  }
  return target
}

function addTooltips (target) {
  const priceRowRegEx = /price|cost|charge|cpm|cpu|cpa|цен(ы|а)|стоимость|руб\./i
  for (const lang of langs) {
    if (target[lang]) {
      target[lang] = map(row => {
        if (priceRowRegEx.test(row.cells[1]) || priceRowRegEx.test(row.cells[2]))
          row.tooltip = warnings[lang]
        return row
      }, target[lang])
    }
  }
  return target
}

function groupByPads (target) {
  for (const lang of langs) {
    if (target[lang]) {
      target[lang] = groupBy(row => row.cells.shift(), target[lang])
    }
  }
  return target
}

module.exports = target => {
  target.summaryTable = pipe(wrapCells, unnestRows, addTooltips, groupByPads)(target.summaryTable)
  return target
}
