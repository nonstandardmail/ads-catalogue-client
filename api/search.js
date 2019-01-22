const { pipe, map } = require('ramda')
const unnestSlug = require('../lib/transforms/common/unnest-slug')
const fetchFactory = require('../lib/fetch/fetch-factory')
const l18n = require('../lib/l18n/l18n-decorator')
const query =
  `*[(_type == "product" || _type == "article") && (title.ru match "*_QUERY_*" || title.en match "*_QUERY_*")] {
    title,
    "type": _type,
    slug
  }[0...10]`

const transform =
  pipe(
    map(unnestSlug),
    l18n
  )

module.exports = (sanityProject, sanityStorageName) =>
  searchRequest => fetchFactory(
    sanityProject,
    sanityStorageName,
    query.replace(/_QUERY_/g, searchRequest),
    transform
  )()
