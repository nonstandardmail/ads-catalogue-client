const listProducts = require('./api/list-products')
const listBusinesGoals = require('./api/list-business-goals')
const listPads = require('./api/list-pads')
const listArticles = require('./api/list-articles')
const listLetters = require('./api/list-letters')
const search = require('./api/search')
const localize = require('./lib/l18n/l18n')

module.exports = {
  createClient: (sanityProject, sanityStorageName) => ({
    listProducts: listProducts(sanityProject, sanityStorageName),
    listBusinessGoals: listBusinesGoals(sanityProject, sanityStorageName),
    listPads: listPads(sanityProject, sanityStorageName),
    listArticles: listArticles(sanityProject, sanityStorageName),
    listLetters: listLetters(sanityProject, sanityStorageName),
    search: search(sanityProject, sanityStorageName)
  }),
  localize
}
