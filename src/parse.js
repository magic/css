const is = require('@magic/types')

const camel2kebab = require('./camel2kebab')

// . is a class
// # is an id,
// & is a property (:hover, :active),
// media are media queries
const special = ['.', '#', '&', 'media']

const getSelector = (parent, name) => {
  // names that contain , have to be split and prefixed separately
  if (name.includes(',')) {
    return name
      .split(',')
      .map(n => getSelector(parent, n.trim()))
      .join(', ')
      .trim()
  }

  // compose the selector
  let res = parent

  // selectors starting with & get appended to parent
  if (name.startsWith('&')) {
    res += name.substr(1)
  } else {
    res += ` ${name}`
  }

  return res.trim()
}

const recurseParse = mod => {
  const [parent, items] = mod

  let children = []
  const props = {}

  Object.entries(items).forEach(([name, item]) => {
    if (is.object(item)) {
      name = getSelector(parent, name)
      children.push(recurseParse([name, item]))
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

  return Object.entries(styleObject).map(recurseParse)
}

module.exports = parse
