require('dotenv').config()
const test = require('ava')
const fetchFactory = require('./fetch-factory')
const { compose, head, prop } = require('ramda')

test('frechFactory returns fetch function', async t => {
  const ruTitleLens = compose(prop('ru'), prop('title'))
  const fetchFirstProductRussianTitle = fetchFactory(
    process.env.sanityProject,
    process.env.sanityStorageName,
    '*[_type == "product"] { title }',
    compose(ruTitleLens, head)
  )
  t.true(typeof (await fetchFirstProductRussianTitle()) === 'string')
})
