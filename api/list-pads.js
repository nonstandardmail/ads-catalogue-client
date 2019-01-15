const fetchFactory = require('../lib/fetch/fetch-factory')
const l18n = require('../lib/l18n/l18n-decorator')

const query =
  `*[_type == "pad"] {
    title,
    "id": _id,
    "parentId": parents._ref
  }`

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    l18n
  )
