const is = require('@magic/types')

const parse = require('./parse')
const camel2kebab = require('./camel2kebab')

const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => `${camel2kebab(k)}: ${v};`)
    .join(' ')

const recurseStringify = mod => {
  let res = mod

  if (is.array(mod)) {
    if (is.string(mod[0]) && mod[0].startsWith('@media')) {
      res = `${mod[0]} { ${recurseStringify(mod[1])} }`
    } else {
      res = mod.map(recurseStringify).join(' ')
    }
  } else if (is.object(mod)) {
    res = `{ ${stringifyProps(mod)} }\n`
  }

  return res
}

const stringify = (styles, opts = {}) => {
  const parsed = parse(styles, opts)

  return recurseStringify(parsed)
}

module.exports = stringify
