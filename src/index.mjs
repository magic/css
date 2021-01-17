import is from '@magic/types'

import parse from './parse/index.mjs'
import stringify from './stringify/index.mjs'
import write from './write.mjs'
import minify from './minify.mjs'
import selectors from './selectors.mjs'

const classes = style => selectors(style).filter(f => f.startsWith('.'))
const ids = style => selectors(style).filter(f => f.startsWith('#'))

const css = async (style, opts) => {
  if (is.function(style)) {
    style = style(opts)
  }

  if (is.empty(style)) {
    return false
  }

  const css = await stringify(style, opts)

  return {
    css,
    classes: classes(style, opts),
    ids: ids(style, opts),
    selectors: selectors(style, opts),
    parsed: parse(style, opts),
    minified: minify(css, opts),
  }
}

css.parse = parse
css.stringify = stringify
css.write = write
css.minify = minify
css.classes = classes
css.selectors = selectors
css.ids = ids

export default css
