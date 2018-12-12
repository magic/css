const is = require('@magic/types')

const parse = require('./parse')
const stringify = require('./stringify')
const write = require('./write')
const minify = require('./minify')
const classes = require('./classes')

const css = style => !is.empty(style) && ({
  css: stringify(style),
  classes: classes(style),
  parsed: parse(style),
  minified: minify(stringify(style)),
})

css.parse = parse
css.stringify = stringify
css.write = write
css.minify = minify
css.classes = classes

module.exports = css
