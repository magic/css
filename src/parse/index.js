const is = require('@magic/types')
const deep = require('@magic/deep')

const getSelector = require('./getSelector')
const recurseStyle = require('./style')
// const sort = require('./sort')

const recurseParse = mod => {
  const [parent, items] = mod

  let children = []
  const props = {}

  if (parent.startsWith('@media')) {
    const i = parse(items)
    return [parent, i]
  }

  if (parent.startsWith('@keyframes')) {
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
  // first check if the user sent us a function that resolves to a css object
  if (is.function(styles)) {
    styles = styles(opts)
  }
  // this might trigger additionally to the is.function if statement above
  if (is.array(styles)) {
    styles = recurseStyle(styles)
  }

  const parsed = Object.entries(styles)
    .sort(a => (a[0].startsWith('@') ? 1 : -1))
    .map(recurseParse)

  return parsed
}

module.exports = parse
