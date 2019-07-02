const fetchFactory = require('../lib/fetch/fetch-factory')

const query =
  `*[_type == "pad"] {
    title,
    priority,
    "id": _id,
    "parentId": parents._ref
  }`

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    id => id
  )
