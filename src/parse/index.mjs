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

  // if there is a parent object, there are no items.
  if (is.object(parent)) {
    return Object.entries(parent).map(s => recurseParse(s, opts))
  }

  // items have to be an object
  if (!is.object(items)) {
    log.error('Invalid style received', { parent, items })
    return
  }

  let children = []
  const props = {}

  if (parent.startsWith('@keyframes') || parent.startsWith('@media')) {
    // media and keyframes are special, they provide a full body of css rules
    const i = parse(items)
    return [parent, i]
  } else if (parent.startsWith('@font-face')) {
    // handle font face declarations that are expected to expand
    let i = items
    if (is.string(items.url)) {
      i = [items]
    }

    if (is.array(i)) {
      return [parent, i]
    }
  }

  if (is.objectNative(items)) {
    Object.entries(items).forEach(([name, item]) => {
      if (is.array(item)) {
        props[name] = item
      } else if (is.objectNative(item)) {
        name = getSelector(parent, name)
        children = deep.merge(children, recurseParse([name, item], opts))
      } else {
        props[name] = item
      }
    })
  }

  if (is.empty(props)) {
    if (!is.empty(children)) {
      return children
    }
  } else {
    return [[parent, props], ...children]
  }
}

const isStyle = style => style && style.length === 2 && is.string(style[0]) && is.object(style[1])

/*
 * we can not use deep.flatten here, the flattened array has a specific structure:
 * [[key, styles], [key, styles]],
 * deep.flatten would return [key, styles, key, styles]
 */
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

/*
 * parse the styles css object into an array of key-value pairs.
 */
const parse = (styles, opts = {}) => {
  const defaultWidths = {
    tablet: '500px',
    laptop: '900px',
    desktop: '1200px',
    agency: '1600px',
  }

  opts.widths = {
    ...defaultWidths,
    ...opts.widths,
  }

  // first check if the user sent us a function that resolves to a css object
  if (is.function(styles)) {
    styles = styles(opts)
  }

  if (is.array(styles)) {
    // if styles are an array, map over the items
    styles = styles.map(s => recurseParse(s, opts))
  } else if (is.objectNative(styles)) {
    // styles are an object
    styles = Object.entries(styles).map(s => recurseParse(s, opts))
  } else {
    // unknown styles
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
