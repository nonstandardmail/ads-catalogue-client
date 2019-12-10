const fetchFactory = require('../lib/fetch/fetch-factory')

const query =
  `*[_type == "formatType"] {
    title,
    "id": _id
  }`

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    id => id
  )
