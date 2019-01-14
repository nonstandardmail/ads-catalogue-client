const test = require('ava')
const { equals } = require('ramda')
const formatPreviews = require('./format-previews')

const videoPreviewURL = 'https://cdn.sanity.io/files/1z3f9phr/staging/e04a56c709c5281a786f15c073a978a1f85276db.mp4'
const imagePreviewURL = 'https://cdn.sanity.io/files/1z3f9phr/staging/eeb79e44d530507b39f5072124df2267dc675905.jpg'

const target = {
  'previews': [
    videoPreviewURL,
    imagePreviewURL
  ]
}

const targetWithEmptyPreviews = {
  'previews': [
    null,
    imagePreviewURL
  ]
}

test('Maps urls array to object array, omitting null values', t => {
  const transformedTarget = formatPreviews(target)
  t.true(equals(
    transformedTarget.previews,
    [ { type: 'video', device: 'mobile', src: videoPreviewURL }
    , { type: 'img', device: 'desktop', src: imagePreviewURL } ]
  ))

  const transformedTargetWithNull = formatPreviews(targetWithEmptyPreviews)
  t.true(equals(
    transformedTargetWithNull.previews,
    [ { type: 'img', device: 'desktop', src: imagePreviewURL } ]
  ))
})
