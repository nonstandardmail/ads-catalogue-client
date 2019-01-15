const listProducts = require('./api/list-products')
const listBusinesGoals = require('./api/list-business-goals')
const listPads = require('./api/list-pads')

module.exports = (sanityProject, sanityStorageName) => ({
  listProducts: listProducts(sanityProject, sanityStorageName),
  listBusinessGoals: listBusinesGoals(sanityProject, sanityStorageName),
  listPads: listPads(sanityProject, sanityStorageName)
})