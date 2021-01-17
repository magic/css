import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import parse from '../parse/index.mjs'
import recurseStringify from './recurseStringify.mjs'

const stringify = async (styles, opts = {}) => {
  const parsed = parse(styles, opts)

  const stringified = recurseStringify(parsed)
  const result = await postcss([autoprefixer]).process(stringified, { from: undefined })
  result.warnings().forEach(warn => {
    console.warn(warn.toString())
  })

  return result.css
}

export default stringify
