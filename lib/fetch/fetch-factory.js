const sanityFactory = require('./sanity')
const { id } = require('ramda')

const fetchFactory = (sanityProject, sanityStorageName, query, transform = id) =>
  async () => {
    const sanity = sanityFactory(sanityProject, sanityStorageName)
    const sanityResponse = await sanity.fetch(query)
    return transform(sanityResponse)
  }

module.exports = fetchFactory