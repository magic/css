const is = require('@magic/types')

const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

const parse = require('./parse')
const camel2kebab = require('./camel2kebab')

const stringifyProps = props =>
  Object.entries(props)
    .map(([k, v]) => `${camel2kebab(k)}: ${v};`)
    .join(' ')

const recurseStringify = mod => {
  let res = mod

  if (is.array(mod)) {
    const isString = is.string(mod[0])
    if (isString) {
      if (mod[0].startsWith('@keyframes') || mod[0].startsWith('@media')) {
        return `${mod[0]} {${recurseStringify(mod[1])}}\n`
      } else if (mod[0].startsWith('@font-face')) {
        const { fontFamily, fontDir = '', fontRoot, ...rest } = mod[1]
        res = `${mod[0]} ${recurseStringify({ fontFamily: `"${fontFamily}"`, ...rest })}`

        const eotString = `src: url('${fontDir}${fontFamily}.eot');`

        const srcString = `${eotString} src: ${[
          `url('${fontDir}${fontFamily}.eot#iefix') format('embedded-opentype')`,
          `url('${fontDir}${fontFamily}.ttf') format('truetype')`,
          `url('${fontDir}${fontFamily}.woff') format('woff')`,
          `url('${fontDir}${fontFamily}.woff2') format('woff2')`,
          `url('${fontDir}${fontFamily}.svg#${fontFamily}') format('svg');`,
        ].join(', ')}`

        return res.replace('}\n', `${srcString} }\n`)
      }
    }

    return mod.map(recurseStringify).join(' ')
  } else if (is.object(mod)) {
    return `{ ${stringifyProps(mod)} }\n`
  }

  return res
}

const stringify = async (styles, opts = {}) => {
  const parsed = parse(styles, opts)

  const stringified = recurseStringify(parsed)
  const result = await postcss([autoprefixer]).process(stringified, { from: undefined })
  result.warnings().forEach(warn => {
    console.warn(warn.toString())
  })

  return result.css
}

module.exports = stringify
