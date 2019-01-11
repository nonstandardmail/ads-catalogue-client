module.exports =
  (projectId, stage) => require('@sanity/client')(
    { projectId: projectId,
      dataset: stage,
      useCdn: false
    }
  )