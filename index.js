var assert = require('assert').ok

module.exports = function (path) {

  assert(typeof path === 'string', 'path must be a string')
  assert(path, 'missing path')

  try {
    require.resolve(path)
  } catch (err) {
    if (err.code == 'MODULE_NOT_FOUND') return undefined
    else throw err
  }

  return require(path)

}
