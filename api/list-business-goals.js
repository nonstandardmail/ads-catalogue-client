const fetchFactory = require('../lib/fetch/fetch-factory')

const query =
  `*[_type == "businessGoal"] {
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
