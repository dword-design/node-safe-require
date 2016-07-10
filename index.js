'use strict'

module.exports = (path) => {
  try {
    require.resolve(path)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') return undefined
    else throw err
  }
  return require(path)
}

