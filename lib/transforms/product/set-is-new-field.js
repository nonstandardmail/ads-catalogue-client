module.exports = target => {
  target.isNew = false
  if (target.newUntilDate)
    target.isNew = new Date(target.newUntilDate) > new Date()
  return target
}