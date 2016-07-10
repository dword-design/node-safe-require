'use strict'

const assert = require('assert')
const safeRequire = require('.')

/* global it */

it('found', () => {
  assert.equal(safeRequire('url'), require('url'))
})

it('not found', () => {
  assert.equal(safeRequire('nonexistent'), undefined)
})
