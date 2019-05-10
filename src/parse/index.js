const is = require('@magic/types')
const deep = require('@magic/deep')
const log = require('@magic/log')

const getSelector = require('./getSelector')

const recurseParse = mod => {
  if (!is.array(mod) && is.object(mod)) {
    return Object.entries(mod).map(recurseParse)
  }

  const [parent, items] = mod

  if (is.object(parent)) {
    return Object.entries(parent).map(recurseParse)
  }

  if (!is.object(items)) {
    log.error('Invalid style received', [parent, items])
    return
  }

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

const isStyle = style => style && style.length === 2 && is.string(style[0]) && is.object(style[1])

const concatMaps = (map, ...iterables) => {
  for (const iterable of iterables) {
    for (const [key, val] of iterable) {
      map.set(key, val)
    }
  }
  return map
}

const flatten = styles => {
  let styleMap = new Map()

  if (isStyle(styles)) {
    styleMap.set(...styles)
  } else if (is.array(styles)) {
    styles
      .filter(a => a)
      .forEach(style => {
        styleMap = concatMaps(styleMap, flatten(style))
      })
  } else {
    return styles
  }

  return styleMap
}

const parse = (styles, opts = {}) => {
  // first check if the user sent us a function that resolves to a css object
  if (is.function(styles)) {
    styles = styles(opts)
  }

  // this might trigger additionally to the is.function if statement above
  if (is.array(styles)) {
    styles = styles.map(recurseParse)
  } else if (!is.array(styles) && is.object(styles)) {
    styles = Object.entries(styles).map(recurseParse)
  }

  const parsedMap = flatten(styles)

  return Array.from(parsedMap)
}

module.exports = parse
