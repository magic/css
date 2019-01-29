const is = require('@magic/types')
const deep = require('@magic/deep')

const getSelector = require('./getSelector')

const recurseParse = mod => {
  const [parent, items] = mod

  let children = []
  const props = {}

  if (parent.startsWith('@media')) {
    const i = parse(items)
    return [parent, i]
  }

  Object.entries(items).forEach(([name, item]) => {
    if (is.object(item)) {
      name = getSelector(parent, name)
      children = deep.merge(children, recurseParse([name, item]))
    } else {
      props[name] = item
    }
  })

  if (is.empty(props)) {
    if (!is.empty(children)) {
      return children
    }
  } else {
    return [[parent, props], ...children]
  }
}

const parse = (styles, opts = {}) => {
  const styleObject = is.function(styles) ? styles(opts) : styles

  return Object.entries(styleObject)
    .sort(a => (a[0].startsWith('@media') ? 1 : -1))
    .map(recurseParse)
}

module.exports = parse
