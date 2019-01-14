const { reject, isNil } = require('ramda')

function parsePreviewUrl (url, index) {
  if (url === null) return null
  return {
    type: /.mp4$/.test(url) ? 'video' : 'img',
    device: ['mobile', 'desktop'][index],
    src: url
  }
}

module.exports = target => {
  target.previews = reject(isNil, target.previews.map(parsePreviewUrl))
  return target
}