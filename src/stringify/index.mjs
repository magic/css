import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import parse from '../parse/index.mjs'
import recurseStringify from './recurseStringify.mjs'

/*
 * stringify the styles css object into a valid css string.
 */
const stringify = async (styles, opts = {}) => {
  const parsed = parse(styles, opts)

  const stringified = recurseStringify(parsed)

  /*
   * test the resulting css using postcss and autoprefix vendors where needed.
   */
  const result = await postcss([ autoprefixer ]).process(stringified, { from: undefined })

  result.warnings().forEach(warn => {
    console.warn(warn.toString())
  })

  return result.css
}

export default stringify
