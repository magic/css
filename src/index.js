const is = require('@magic/types')

const parse = require('./parse')
const stringify = require('./stringify')
const write = require('./write')
const minify = require('./minify')
const selectors = require('./selectors')

const classes = style => selectors(style).filter(f => f.startsWith('.'))
const ids = style => selectors(style).filter(f => f.startsWith('#'))

const css = async style => {
  if (is.empty(style)) {
    return false
  }

  const css = await stringify(style)

  return {
    css,
    classes: classes(style),
    ids: ids(style),
    selectors: selectors(style),
    parsed: parse(style),
    minified: minify(css),
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
