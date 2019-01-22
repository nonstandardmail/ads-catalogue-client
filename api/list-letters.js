const { map, pipe } = require('ramda')
const fetchFactory = require('../lib/fetch/fetch-factory')
const parseRecipients = require('../lib/transforms/letter/parse-recipients')
const blocksToHtml = require('@sanity/block-content-to-html')
const bodyToHTML = (projectId, dataset) => target => {
  target.body = blocksToHtml({ blocks: target.body, projectId, dataset })
  return target
}

const query =
  `*[_type == "letter"] {
    "title": article->title.ru,
    "body": article->body.ru,
    "recipients": recipients[]->{list},
    "id": _id
  }`

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    pipe(
      map(bodyToHTML(sanityProject, sanityStorageName)),
      map(parseRecipients)
    )
  )
