const is = require('@magic/types')
const deep = require('@magic/deep')
const fs = require('fs')
const path = require('path')

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

const camReg = /[a-z]([A-Z])+/g
const camHandler = m => m[0] + '-' + m.substring(1).toLowerCase()
const camel2kebab = str => str.replace(camReg, camHandler)

const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => `${camel2kebab(k)}: ${v};`)
    .join(' ')

const recurseStringify = mod => {
  let res

  if (is.array(mod)) {
    res = mod.map(recurseStringify).join(' ')
  } else if (is.object(mod)) {
    res = `{ ${stringifyProps(mod)} }\n`
  } else {
    return mod
  }

  return res
}

const parse = opts => (styles, parent = '') => {
  const styleObject = is.function(styles) ? styles(opts) : styles

  return Object.entries(styleObject).map(recurseParse)
}

const stringify = opts => styles => {
  const parsed = parse(opts)(styles)

  return recurseStringify(parsed)
}

const write = (opts = {}) => {
  const out = opts.OUTFILE || path.join(__dirname, 'out.css')

  return styles => {
    const bundle = stringify(opts)(styles)
    fs.writeFileSync(out, bundle)
    return true
  }
}

const minify = style =>
  style
    // replace newlines after commas to get multiple css classes onto one line
    .replace(/,\n/gim, ',')
    // replace all whitespaces with one space per whitespace group (\n\t\n === ' ').
    .replace(/\s\s+/gim, ' ')
    // replace newlines before } to get all declarations onto one line
    .replace(/\n}/gim, '}')
    // remove spaces around opening brackets {
    .replace(/\s{\s+/gim, '{')
    // remove spaces after :
    .replace(/:\s/gim, ':')
    // remove spaces after ;
    .replace(/;\s/gim, ';')
    // remove spaces after ,
    .replace(/,\s/gim, ',')
    .trim()

const css = opts => ({
  parse: parse(opts),
  stringify: stringify(opts),
  write: write(opts),
  minify,
})

module.exports = css
