const { map } = require('ramda')
const fetchFactory = require('../lib/fetch/fetch-factory')
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
    map(unnestSlug)
  )
