const { pipe, map } = require('ramda')
const fetchFactory = require('../lib/fetch/fetch-factory')
const l18n = require('../lib/l18n/l18n-decorator')
const unnestSlug = require('../lib/transforms/common/unnest-slug')

const query =
  `*[_type == "article"] {
    title,
    body,
    "date": publicationDate,
    slug,
    "id": _id
  }`

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    pipe(map(unnestSlug), l18n)
  )
