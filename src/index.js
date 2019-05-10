const is = require('@magic/types')

const parse = require('./parse')
const stringify = require('./stringify')
const write = require('./write')
const minify = require('./minify')
const selectors = require('./selectors')

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

module.exports = css
