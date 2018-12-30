/* eslint-disable no-underscore-dangle */

import expect from 'expect.js'
import escape from '../../src/utils/escape'
import {resetSheets} from '../../../../tests/utils'

const originalEscape = CSS.escape

describe('Unit: jss - escape', () => {
  beforeEach(resetSheets())

  describe('with CSS.escape', () => {
    it('should escape in development', () => {
      expect(escape('test()')).to.be('test\\(\\)')
    })

    it('should not escape in production', () => {
      process.env.NODE_ENV = 'production'
      expect(escape('test()')).to.be('test()')
      process.env.NODE_ENV = 'development'
    })
  })

  describe('without CSS.escape', () => {
    beforeEach(() => {
      delete CSS.escape
    })

    afterEach(() => {
      CSS.escape = originalEscape
    })

    it('should escape', () => {
      escape('test()')
      expect(escape('test()')).to.be('test\\(\\)')
    })
  })
})
