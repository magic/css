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

const recurseStyle = styles => {
  let styleObject = {}
  styles.forEach(style => {
    if (is.array(style)) {
      style = recurseStyle(style)
    }
    styleObject = {
      ...styleObject,
      ...style,
    }
  })
  return styleObject
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

  return Object.entries(styles).map(recurseParse)
}

module.exports = parse
