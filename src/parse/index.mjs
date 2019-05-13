import is from '@magic/types'
import deep from '@magic/deep'
import log from '@magic/log'

import getSelector from './getSelector.mjs'

const recurseParse = (mod, opts) => {
  if (is.function(mod)) {
    mod = mod(opts)
  }
  if (!is.array(mod) && is.object(mod)) {
    return Object.entries(mod).map(s => recurseParse(s, opts))
  }

  const [parent, items] = mod

  if (is.object(parent)) {
    return Object.entries(parent).map(s => recurseParse(s, opts))
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
      children = deep.merge(children, recurseParse([name, item], opts))
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
  const styleMap = []
  if (isStyle(styles)) {
    styleMap.push(styles)
  } else if (is.array(styles)) {
    styles
      .filter(a => a)
      .forEach(style => {
        const flattened = flatten(style)
        styleMap.push(flattened)
      })
  } else {
    return styles
  }

  return styleMap
}

const flat = a => {
  if (isStyle(a)) {
    const [k, v] = a
    return [k, flat(v)]
  } else if (is.array(a)) {
    let flattened = []
    a.forEach(b => {
      if (is.array(b)) {
        if (isStyle(b)) {
          flattened.push(b)
        } else {
          b = flat(b)
          flattened = [...flattened, ...b]
        }
      }
    })
    return flattened
  }
}

const parse = (styles, opts = {}) => {
  // first check if the user sent us a function that resolves to a css object
  if (is.function(styles)) {
    styles = styles(opts)
  }

  // this might trigger additionally to the is.function if statement above
  if (is.array(styles)) {
    styles = styles.map(s => recurseParse(s, opts))
  } else if (!is.array(styles) && is.object(styles)) {
    styles = Object.entries(styles).map(s => recurseParse(s, opts))
  } else {
    log.error('invalid styles received', styles)
  }

  const flattened = flat(styles)

  const styleMap = new Map()
  const queryMap = new Map()

  flattened.forEach(([k, v]) => {
    if (k.startsWith('@media')) {
      const oldVal = queryMap.get(k)
      if (oldVal) {
        v = deep.merge(oldVal, v)
      }
      queryMap.set(k, v)
    } else {
      const oldVal = styleMap.get(k)
      if (oldVal) {
        v = deep.merge(oldVal, v)
      }
      styleMap.set(k, v)
    }
  })

  return Array.from([...styleMap, ...queryMap])
}

export default parse
