const { contains, merge, prop, omit, map, partial } = require('ramda')
const supportedLangs = [ 'ru', 'en' ]
const defaultLang = 'ru'

function hasLocalizableType(field) {
  return !!field['_type'] && /locale\w+/.test(field['_type'])
}

function localizeObject(lang, target) {
  const localizedFields = {}
  if (!contains(lang, supportedLangs))
    throw new Error(`Unsupported language "${lang}"`)

  for (const key of Object.keys(target)) {
    const field = prop(key, target)
    if (hasLocalizableType(field))
      localizedFields[key] = prop(lang, field) || prop(defaultLang, field)
  }

  return merge(
    omit(['localize'], target),
    localizedFields
  )
}

function localize(lang = 'ru') {
  return Array.isArray(this)
    ? map(partial(localizeObject, [ lang ]), this)
    : localizeObject(lang, this)
}

module.exports = target => {
  target.localize = localize
  return target
}