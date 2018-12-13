const is = require('@magic/types')
const deep = require('@magic/deep')

const parse = require('./parse')

const recurseSelectors = mod => {
  let res

  if (is.array(mod)) {
    res = mod.map(recurseSelectors)
  } else if (!is.obj(mod)) {
    res = mod
  }

  return deep.flatten(res).filter(a => a)
}

const selectors = (styles, opts = {}) => {
  const parsed = parse(styles, opts)
  return recurseSelectors(parsed)
}

module.exports = selectors
