const test = require('ava')
const unnestSlug = require('./unnest-slug')

const target = {
  slug: { current: 'slug' }
}

test('unnests slug prop', t => {
  t.true(unnestSlug(target).slug === 'slug')
})
