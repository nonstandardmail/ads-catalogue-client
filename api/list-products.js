const { pipe, map } = require('ramda')
const fetchFactory = require('../lib/fetch/fetch-factory')
const unnestSlug = require('../lib/transforms/common/unnest-slug')
const refsToIds = require('../lib/transforms/common/refs-to-ids')
const formatDevices = require('../lib/transforms/product/format-devices')
const formatPreviews = require('../lib/transforms/product/format-previews')
const formatSummaryTable = require('../lib/transforms/product/format-summary-table')
const setIsNewField = require('../lib/transforms/product/set-is-new-field')

const query =
  `*[_type == "product"] {
    "id": _id,
    title,
    lead,
    slug,
    pads,
    businessGoals,
    minimalBudget,
    summaryTable,
    "devices": devices[]->{name},
    "previews": [
      mobilePreview.asset->url,
      desktopPreview.asset->url
    ],
    newUntilDate,
    description
  }`

const transform =
  pipe(
    map(unnestSlug),
    map(refsToIds('pads')),
    map(refsToIds('businessGoals')),
    map(formatDevices),
    map(formatPreviews),
    map(formatSummaryTable),
    map(setIsNewField)
  )

module.exports = (sanityProject, sanityStorageName) =>
  fetchFactory(
    sanityProject,
    sanityStorageName,
    query,
    transform
  )
