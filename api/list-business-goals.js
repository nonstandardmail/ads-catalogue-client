const fetchFactory = require('../lib/fetch/fetch-factory')
const l18n = require('../lib/l18n/l18n-decorator')

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
    l18n
  )
