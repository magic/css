import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import parse from '../parse/index.mjs'
import recurseStringify from './recurseStringify.mjs'

import { fontFaces } from './fontFaces.mjs'

const keyframes = ({ name, items, plugins }) => `${name} { ${recurseStringify(items, plugins)} }\n`
const mediaqueries = ({ name, items, plugins }) => `${name} { ${recurseStringify(items, plugins)} }\n`

/*
 * stringify the styles css object into a valid css string.
 */
const stringify = async (styles, opts = {}) => {
  const { plugins = {} } = opts

  plugins.stringify = {
    '@font-face': fontFaces,
    '@keyframes': keyframes,
    '@media': mediaqueries,
    ...plugins.stringify,
  }

  const parsed = parse(styles, opts)

  const stringified = recurseStringify(parsed, plugins.stringify)

  /*
   * test the resulting css using postcss and autoprefix vendors where needed.
   */
  const result = await postcss([autoprefixer]).process(stringified, { from: undefined })

  result.warnings().forEach(warn => {
    console.warn(warn.toString())
  })

  return result.css
}

export default stringify
