const is = require('@magic/types')
const deep = require('@magic/deep')

const parse = require('./parse')
const camel2kebab = require('./camel2kebab')

const recurseClasses = mod => {
  let res

  if (is.array(mod)) {
    res = mod.map(recurseClasses)
  } else if (!is.obj(mod)) {
    res = mod
  }

  return deep.flatten(res).filter(a => a)
}

const classes = (styles, opts = {}) => {
  const parsed = parse(styles, opts)
  return recurseClasses(parsed)
}

module.exports = classes
