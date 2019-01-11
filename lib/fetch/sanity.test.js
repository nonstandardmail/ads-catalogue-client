require('dotenv').config()
const test = require('ava')
const sanityFactory = require('./sanity')

test('sanityFactory factory returns sanity client', t => {
  const sanity = sanityFactory(process.env.sanityProject, process.env.sanityStorageName)
  t.truthy(sanity.fetch)
})
