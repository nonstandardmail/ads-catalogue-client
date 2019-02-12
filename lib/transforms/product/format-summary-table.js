const { pipe, map } = require('ramda')

const langs = [ 'en', 'ru' ]
const warnings = {
  ru: 'Уточняйте действующие цены у наших менеджеров',
  en: 'Price may vary. Contact us to get a quote'
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
        if (priceRowRegEx.test(row.cells[0]) || priceRowRegEx.test(row.cells[1]))
          row.tooltip = warnings[lang]
        return row
      }, target[lang])
    }
  }
  return target
}

module.exports = target => {
  target.summaryTable = pipe(unnestRows, addTooltips)(target.summaryTable)
  return target
}
